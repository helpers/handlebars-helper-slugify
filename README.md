# {{slugify}} [![NPM version](https://badge.fury.io/js/helper-slugify.png)](http://badge.fury.io/js/helper-slugify)

> Convert strings into URL slugs.

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i helper-slugify --save-dev
```

## Usage

```handlebars
{{slugify "I am a word too, even though I am but a single letter: i!"}}
```

## Usage in Assemble

In your Gruntfile, simply add `helper-slugify` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      helpers: ['helper-slugify']
    }
    ...
  }
});
```

With that completed, you may now being using the `{{slugify}}` helper in your Assemble project.

