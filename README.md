# gulp-4-bunder

A simple compiler & bundler with building targets, and serve option with livereload.  

> [demo](https://actarian.github.io/gulp-4-bundler/)

## Requirements

#### [NodeJs](https://nodejs.org/it/)
* `node.js -v`  

#### [Npm](https://www.npmjs.com/)
* `npm -v`

Upgrading Npm on mac
* `npm install npm@latest -g`

Upgrading Npm on windows
* [npm-windows-upgrade](https://www.npmjs.com/package/npm-windows-upgrade) 

___

#### [Gulp CLI](https://github.com/angular/angular-cli) version 4.0.0
* `npm install gulp-cli -g`  

___

## Install packages

* `npm install`

___

## Build, Serve & Watch 

* `gulp`

___

## Build Only

* `gulp build`

___

## Build Specific Target

* `gulp build --target dist`

___

## Configuration

You can configure building targets, compilers and bundlers with an easy json configuration file.  

As in the example [gulpfile.config.json](https://github.com/actarian/gulp-4-bundler/blob/master/gulpfile.config.json)

___

## gulpfile.config.json

> gulpfile.config.json

```bash
├── targets
│   ├── browser
│   │   ├── compile
│   │   │   ├── bootstrap.scss
│   │   │   ├── main.scss
│   │   │   └── main.js
│   │   └── bundle
│   │       ├── vendors.css
│   │       └── vendors.js
│   └── dist
│       └── ...
└── options
    ├── tfs: false
    └── server
        ├── src: './',
        ├── port: 6001
        ├── fallback: 'index.html'
        ├── open: true
        ├── livereload: true
        └── directoryListing: false
```
