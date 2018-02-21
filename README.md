# d2l-text-input
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/text-input)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component for D2L text inputs.

![screenshot of text input component](/text-input.gif?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-text-input` can be installed from [Bower][bower-url]:

```shell
bower install d2l-text-input
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the component as needed:

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="../d2l-text-input/d2l-text-input.html">
</head>
```

Then use the `<d2l-text-input>` custom element in your application.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-text-input.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-text-input name="myInput" value="input value"></d2l-text-input>
```

Many of the same attributes from native [`<input type="text">` are available](https://developer.mozilla.org/en/docs/Web/HTML/Element/input):

```html
<d2l-text-input disabled></d2l-text-input>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run test:lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-text-input
[bower-image]: https://badge.fury.io/bo/d2l-text-input.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/text-input
[ci-image]: https://travis-ci.org/BrightspaceUI/text-input.svg?branch=master
