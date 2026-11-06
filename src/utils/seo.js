import seoData from '../data/seo.json';

export const toNumericPrice = (price) => Number(String(price).replace(/[^\d]/g, ''));

export const absoluteUrl = (path) =>
  /^https?:\/\//.test(path) ? path : `${seoData.siteUrl}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

export const fillTemplate = (template, values) =>
  template.replace(/\{\{(\w+)\}\}/g, (match, key) => values[key] ?? match);

const cheapest = (prices) =>
  prices
    .filter(Boolean)
    .sort((a, b) => toNumericPrice(a) - toNumericPrice(b))[0];

// "firstInstallment": cuota 1 de la tabla "Valor de cuota" de la landing.
// "creditPlans": precio de las tarjetas "Cuotas desde" que apuntan a la landing.
export function getPlanOvaloPrice(vehicle, priceSource, creditPlans) {
  if (priceSource === 'creditPlans') {
    return cheapest(
      creditPlans
        .filter((plan) => plan.ctaLink === `/plan-ovalo/${vehicle.slug}` && !plan.planEmpresas)
        .map((plan) => plan.price)
    );
  }

  return cheapest(vehicle.versions.map((version) => version.firstInstallment?.value));
}

export function buildPlanOvaloJsonLd(vehicle, seo) {
  const pageUrl = absoluteUrl(`/plan-ovalo/${vehicle.slug}`);

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Plan Óvalo', item: absoluteUrl('/plan-ovalo') },
      { '@type': 'ListItem', position: 3, name: seo.breadcrumbName, item: pageUrl },
    ],
  };

  const products = seo.products
    .map((product) => {
      const version = vehicle.versions.find((item) => item.highlight === product.version);
      if (!version) return null;

      return {
        '@type': 'Product',
        name: product.name,
        brand: { '@type': 'Brand', name: 'Ford' },
        image: absoluteUrl(version.image),
        description: product.description,
        offers: {
          '@type': 'Offer',
          url: pageUrl,
          priceCurrency: 'ARS',
          price: toNumericPrice(version.firstInstallment.value),
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: seoData.siteName },
        },
      };
    })
    .filter(Boolean);

  const faq = {
    '@type': 'FAQPage',
    mainEntity: seo.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, ...products, faq],
  };
}
