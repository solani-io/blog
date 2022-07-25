// TODO : minify HTML, CSS, JS
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
    // Filter source file names using a glob
    eleventyConfig.addCollection('blogs', function (collectionApi) {
        return collectionApi.getFilteredByGlob('blog/**/*.md');
    });

    // add syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);
};
