export default function sitemap() {
  const baseUrl = 'https://redwebstudio.it';

  // Solo le pagine che vogliamo su Google
  const routes = ['', '/chi-sono', '/progetti'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Progetti Dinamici
  const projects = ['inglese-divertente', 'digital-shipping-revolution', 'misterbox'].map(
    (slug) => ({
      url: `${baseUrl}/progetti/${slug}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9, // Alta priorità perché sono i tuoi asset migliori
    })
  );

  return [...routes, ...projects];
}