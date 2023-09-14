module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      },
    };
  };