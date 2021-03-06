# {{handlebars-helper-slugify}} [![NPM version](https://badge.fury.io/js/handlebars-helper-slugify.png)](http://badge.fury.io/js/handlebars-helper-slugify)

> {{slugify}} handlebars helper. Uses the awesome underscore.string to transform text into a URL slug. Replaces whitespaces, accentuated and special characters with a dash.

**Heads up!** v0.3.0 of this helper requires Assemble v0.5.0 and greater!


## Install

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-slugify`.

To automatically load helpers from node_modules, see [resolve-dep](https://github.com/jonschlinkert/resolve-dep).

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-slugify` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-slugify' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-slugify', 'foo/*.js']
    },
    files: {
      '_gh_pages/': ['templates/pages/*.hbs']
    }
  }
});
```

Now that the helper is registered, you may begin using it in your templates.

## Usage

Given file name: `Executive Summary 2013.md`:

```html
{{slugify page.filename}}
```

Renders to `executive-summary-2013.md`.

## Credit
This helper is based on the `slugify` method from [underscore.string](http://epeli.github.com/underscore.string/), thank you to the maintainers and contributors of that library!

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 10, 2014._