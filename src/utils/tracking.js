class TrackingManager {
  constructor() {
    this.isLoaded = false;
    this.queue = [];
    this.interactionDetected = false;
  }

  // Cargar scripts solo cuando sea necesario
  loadOnDemand() {
    if (this.isLoaded) return;
    
    // Verificar si ya se cargaron desde el HTML
    if (window.trackingScripts && window.trackingScripts.loaded) {
      this.isLoaded = true;
      return;
    }
    
    // Cargar Google Analytics
    this.loadGoogleAnalytics();
    
    // Cargar Facebook Pixel
    this.loadFacebookPixel();
    
    // Cargar Pinterest
    this.loadPinterest();
    
    this.isLoaded = true;
  }

  loadGoogleAnalytics() {
    // Solo cargar si no existe
    if (window.gtag) return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VS5EWDQFM4';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VS5EWDQFM4');
  }

  loadFacebookPixel() {
    // Solo cargar si no existe
    if (window.fbq) return;
    
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1468969691163431');
    fbq('track', 'PageView');
  }

  loadPinterest() {
    // Solo cargar si no existe
    if (window.pintrk) return;
    
    !function(e){if(!window.pintrk){window.pintrk = function () {
    window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
      n=window.pintrk;n.queue=[],n.version="3.0";var
      t=document.createElement("script");t.async=!0;t.src=e;var
      r=document.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
    pintrk('load', '2613548876217', {em: '<user_email_address>'});
    pintrk('page');
  }

  // Método para cargar scripts de forma diferida
  loadDeferred() {
    // Esperar a que el contenido crítico esté cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => this.loadOnDemand(), 5000);
      });
    } else {
      setTimeout(() => this.loadOnDemand(), 5000);
    }
  }

  // Cargar scripts después de interacción del usuario
  loadOnInteraction() {
    if (this.interactionDetected) return;
    
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    const loadOnInteraction = () => {
      this.interactionDetected = true;
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction, true);
      });
      this.loadOnDemand();
    };
    
    events.forEach(event => {
      document.addEventListener(event, loadOnInteraction, true);
    });
    
    // Fallback: cargar después de 10 segundos si no hay interacción
    setTimeout(() => {
      if (!this.interactionDetected) {
        this.loadOnDemand();
      }
    }, 10000);
  }
}

export const trackingManager = new TrackingManager();
