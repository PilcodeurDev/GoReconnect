const SitemapGenerator = require('sitemap-generator');

// Remplacez l'URL ci-dessous par l'URL de votre site
const targetUrl = "https://www.goreconnect.ch";

// Configurez le générateur de sitemap
const generator = SitemapGenerator(targetUrl, {
  stripQuerystring: false, // Changez selon vos besoins
});

//Ecoutez les événements
generator.on('done', () => {
  console.log("Sitemap généré avec succès !");
});

generator.on('error', (error) => {
  console.log("Erreur lors de la génération du sitemap :", error);
});

//Lancez la génération du sitemap
generator.start();
