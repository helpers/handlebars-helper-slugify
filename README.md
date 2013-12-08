# {{slugify}} [![NPM version](https://badge.fury.io/js/handlebars-helper-slugify.png)](http://badge.fury.io/js/handlebars-helper-slugify)

> Transform text into a URL slug. Replaces whitespaces, accentuated and special characters with a dash.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-slugify`.

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
      'dist/': ['src/templates/*.hbs']
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
Thank you to the maintainers and contributors of [underscore.string](http://epeli.github.com/underscore.string/), "_String manipulation extensions for Underscore.js javascript library_". This is a simple helper, but [underscore.string](http://epeli.github.com/underscore.string/) has many useful mixins for Underscore/Lo-Dash that I get value from every day. So again, "thank you"!


## Author

**Jon Schlinkert**

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [slugify/Jon Schlinkert](http://slugify.com/Jon Schlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.