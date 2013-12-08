/**
 * Handlebars Helpers: {{slugify}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var _str = require('underscore.string');


// Export helpers
module.exports.register = function (Handlebars) {

  /**
   * Transform text into a URL slug. Replaces whitespaces, accentuated, and special characters with a dash.
   * @usage:
   *   Given file name: "Executive Summary 2013.md"
   *   {{slugify page.filename}} => "executive-summary-2013.md"
   */
  Handlebars.registerHelper('slugify', function(str) {
    return new Handlebars.SafeString(_str.slugify(str));
  });
};
