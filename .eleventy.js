const fs = require("fs");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/UI");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/" });
  eleventyConfig.addShortcode("photoFolder", function (photoFolder) {
    const html = fs.readdirSync(photoFolder)
      .map((file) => `<img src="/assets/images/gallery/${file}" />`);
    return html.join("\n");
  });
  
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
   };

};