# gulp-4-bunder

A simple compiler & bundler with building targets, and serve option with livereload.  

> [Demo](https://actarian.github.io/gulp-4-bundler/)

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

As in the example [gulpfile-config.json](https://github.com/actarian/gulp-4-bundler/blob/master/gulpfile-config.json)

___

## gulpfile-config.json

> gulpfile-config.json

```json
{
	"targets": {
		"browser": {
			"compile": [{
				"input": "src/*.html",
				"output": "docs/",
				"minify": true
			}, {
				"input": "src/css/main.scss",
				"output": "docs/css/main.css",
				"minify": true
			}, {
				"input": "src/js/main.js",
				"output": "docs/js/main.js",
				"rollup": {
					"output": {
						"format": "umd",
						"globals": {
							"rxjs": "rxjs",
							"rxjs/operators": "rxjs.operators"
						},
						"external": ["rxjs"]
					}
				},
				"minify": true
			}],
			"bundle": [{
				"input": [
					"node_modules/swiper/dist/css/swiper.css"
				],
				"output": "docs/css/vendors.css",
				"minify": true
			}, {
				"input": [
					"node_modules/swiper/dist/js/swiper.js"
				],
				"output": "docs/js/vendors.js",
				"minify": true
			}],
			"resource": [{
				"input": [
					"node_modules/@fortawesome/fontawesome-free/**/*.*"
				],
				"output": "docs/fonts/fontawesome/"
			}]
		}
	},
	"tfs": false,
	"server": {
		"root": "./docs",
		"path": "/gulp-4-bundler/",
		"host": "localhost",
		"port": 9999,
		"log": false
	}
}
```
