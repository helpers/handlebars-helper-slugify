module.exports.register = register = function(Handlebars, options) {

  /**
   * Convert strings into URL slugs.
   * @example:
   *   {{slugify "test test"}}
   */
  Handlebars.registerHelper('slugify', function (input) {
    if (!input || typeof input !== 'string') return input;
    return input.replace(/^\s+|\s+$/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  });

};
