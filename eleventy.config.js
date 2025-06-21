export default async function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat složku images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat složku css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-96x96.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("web-app-manifest-192x192.png");
  eleventyConfig.addPassthroughCopy("web-app-manifest-512x512.png");
}

export const config = {
  // jako šablonu nebo soubor s obsahem
  // můžeme použít následující formáty
  templateFormats: ["njk", "html", "md"],

  // jako šablonovací jazyk zvolíme pro všechny
  // formáty výše jazyk Nunjucks
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
};