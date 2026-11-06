#!/usr/bin/env node

/**
 * Genera public/sitemap.xml antes de cada build.
 * Rutas fijas: mantener en sync con las <Route> de src/App.jsx.
 * Vehículos y landings de Plan Óvalo salen de sus JSON, así que se suman solos.
 */

import { readFile, writeFile } from 'fs/promises';

const SITE_URL = 'https://autospecial.com.ar';
const OUTPUT = './public/sitemap.xml';

const STATIC_ROUTES = [
  '/',
  '/vehiculos',
  '/vehiculos/test-drive',
  '/plan-ovalo',
  '/financiacion',
  '/financiacion/ford-credit',
  '/financiacion/plan-ovalo/actos-de-adjudicacion',
  '/financiacion/plan-ovalo/resultados-actos-de-adjudicacion',
  '/ford-pro',
  '/postventa',
  '/postventa/talleres',
  '/postventa/solicitar-turno',
  '/postventa/servicios',
  '/postventa/repuestos',
  '/postventa/accesorios',
  '/postventa/ford-protect',
  '/quienes-somos',
  '/quienes-somos/conocenos',
  '/quienes-somos/sumate',
  '/quienes-somos/novedades',
  '/sucursales',
];

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

async function generateSitemap() {
  const { vehicles } = await readJson('./src/data/vehicles.json');
  const { vehicles: planOvaloVehicles } = await readJson('./src/data/planOvaloVehicleDetail.json');

  const vehicleRoutes = vehicles.map(
    (vehicle) => `/vehiculos/${encodeURIComponent(vehicle.slug ?? vehicle.id)}`
  );
  const planOvaloRoutes = planOvaloVehicles.map((vehicle) => `/plan-ovalo/${vehicle.slug}`);

  const routes = [...new Set([...STATIC_ROUTES, ...vehicleRoutes, ...planOvaloRoutes])];
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${escapeXml(`${SITE_URL}${route}`)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await writeFile(OUTPUT, xml, 'utf8');
  console.log(`✅ sitemap.xml generado con ${routes.length} URLs`);
}

generateSitemap().catch((error) => {
  console.error('❌ Error generando sitemap.xml:', error);
  process.exit(1);
});
