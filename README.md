# 💎 Gulp 4 Bundler

[![Licence](https://img.shields.io/github/license/actarian/gulp-4-bundler.svg)](https://github.com/actarian/gulp-4-bundler)

This is the bootstrap app of the [gulpfile-config](https://github.com/actarian/gulpfile-config) bundler utility with [gulpfile-config.json](https://github.com/actarian/gulp-4-bundler/blob/master/gulpfile-config.json)  
A simple compiler & bundler with building targets, and serve option with livereload.  

> [Demo](https://actarian.github.io/gulp-4-bundler/)

## Requirements

### [NodeJs](https://nodejs.org/it/)
```
node.js -v
```

### [Npm](https://www.npmjs.com/)
```
npm -v
```
### Updating Npm on Mac
```
npm install npm@latest -g
```
### Updating Npm on Windows with [npm-windows-upgrade](https://www.npmjs.com/package/npm-windows-upgrade) 

```
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
```
```
npm install --global --production npm-windows-upgrade
```
```
npm-windows-upgrade
```
### [Gulp CLI](https://github.com/angular/angular-cli) version 4.0.0
```
npm install gulp-cli -g
```
___

## Installation
```
npm install gulpfile-config --save
```
___

## Configuration

You can configure building targets, compilers and bundlers with an easy json configuration file.  

As in the example [gulpfile-config.json](https://github.com/actarian/gulp-4-bundler/blob/master/gulpfile-config.json)

```json
{
  "targets": {
    "browser": {
      "compile": [
        {
          "input": "src/*.html",
          "output": "docs/",
          "minify": true
        },
        {
          "input": "src/templates/emails/*.mjml",
          "output": "docs/templates/emails/",
          "minify": false
        },
        {
          "input": "src/css/main.scss",
          "output": "docs/css/main.css",
          "minify": true
        },
        {
          "input": "src/css/main-cssvars.scss",
          "output": "docs/css/main-cssvars.css",
          "minify": true
        },
        {
          "input": "src/js/rxcomp/main.js",
          "output": "docs/js/rxcomp/main_es5_iife.js",
          "globals": {
            "gsap": "gsap",
            "rxjs": "rxjs",
            "rxjs/operators": "rxjs.operators",
            "rxcomp": "rxcomp",
            "rxcomp-form": "window['rxcomp-form']"
          },
          "minify": true
        },
        {
          "input": "src/js/typescript/main.ts",
          "output": "docs/js/typescript/main_es5_iife.js",
          "globals": {
            "gsap": "gsap",
            "rxjs": "rxjs",
            "rxjs/operators": "rxjs.operators"
          },
          "minify": true
        },
        {
          "input": "src/js/vanilla/main.js",
          "output": "docs/js/vanilla/main_es5_iife.js",
          "globals": {
            "gsap": "gsap",
            "rxjs": "rxjs",
            "rxjs/operators": "rxjs.operators"
          },
          "minify": true
        }
      ],
      "bundle": [
        {
          "input": [
            "node_modules/swiper/css/swiper.css"
          ],
          "output": "docs/css/vendors.css",
          "minify": true
        },
        {
          "input": [
            "node_modules/rxjs/bundles/rxjs.umd.js",
            "node_modules/rxcomp/dist/rxcomp.js",
            "node_modules/rxcomp-form/dist/rxcomp-form.js",
            "node_modules/swiper/js/swiper.js",
            "node_modules/gsap/dist/EasePack.js",
            "node_modules/gsap/dist/gsap.js"
          ],
          "output": "docs/js/vendors.js",
          "minify": true
        }
      ],
      "copy": [
        {
          "input": [
            "node_modules/@fortawesome/fontawesome-free/**/*.*"
          ],
          "output": "docs/fonts/fontawesome/"
        }
      ]
    },
    "dist": {
      "compile": [
        {
          "input": "src/js/typescript/main.ts",
          "output": [
            {
              "file": "dist/amd/main.js",
              "format": "amd"
            },
            {
              "file": "dist/cjs/",
              "format": "cjs"
            },
            {
              "file": "dist/esm/",
              "format": "esm"
            },
            {
              "file": "dist/system/main.js",
              "format": "system"
            },
            {
              "file": "dist/iife/main.js",
              "format": "iife",
              "minify": true
            },
            {
              "file": "dist/umd/main.js",
              "format": "umd",
              "minify": true
            }
          ],
          "globals": {
            "rxjs": "rxjs",
            "rxjs/operators": "rxjs.operators"
          },
          "name": "main"
        }
      ],
      "bundle": []
    }
  },
  "server": {
    "root": "./docs",
    "path": "/gulp-4-bundler/",
    "host": "localhost",
    "port": 9999,
    "log": false
  },
  "tfs": false
}
```
___
## Commands

### Install packages
```
npm install
```
___

### Build, Serve & Watch 
```
gulp
```

___

### Build Only
```
gulp build
```
### Build & Watch 
```
gulp start
```
### Build Js Only
```
gulp buildJs
```
### Build Js & Watch 
```
gulp startJs
```
### Build Css Only
```
gulp buildCss
```
### Build Css & Watch 
```
gulp startCss
```
### Build Specific Target
```
gulp build --target dist
```
___
