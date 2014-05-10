'use strict';

/**
 * Handlebars Helpers: {{slugify}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 *
 * Transform text into a URL slug. Replaces whitespaces,
 * accentuated, and special characters with a dash.
 *
 * @usage:
 *   Given file name: "Executive Summary 2013.md"
 *   {{slugify page.filename}} => "executive-summary-2013.md"
 */

var slugify = require('./slugify.js');

module.exports = function (assemble) {
  var Handlebars = assemble.Handlebars;
  var helpers = {};

  helpers.slugify = function (str) {
    return new Handlebars.SafeString(slugify(str));
  };

  return helpers;
};