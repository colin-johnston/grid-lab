module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.setTemplateFormats([
    "njk",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    dir: {
      input: "src/",
      output: "dist",
    }
  };
};