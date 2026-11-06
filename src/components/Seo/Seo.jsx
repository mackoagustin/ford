import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seoData from '../../data/seo.json';
import { absoluteUrl } from '../../utils/seo';

function Seo({
  title = seoData.default.title,
  description = seoData.default.description,
  image = seoData.default.image,
  jsonLd,
}) {
  const { pathname } = useLocation();
  const canonical = absoluteUrl(pathname);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoData.siteName} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteUrl(image)} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
}

export default Seo;
