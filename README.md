# New Version

<!-- [![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls] -->

A package helps you to test if you lock version the right way.

## Problem

Have you ever in a situation when one of your dependencies get updated, then it breaks your application. Then you try to lock version of that dependency. But it's hard to verify if your method of locking version is correct. `new-version` helps you by regularly update to a new version (now: weekly), so you can verify if you do it the right way.

## Usage
You can use node api or cli to check the current and newest version of package
### Using CLI
Add this to your package.json
```json
"scripts": {
  "new-version": "new-version"
},
```
then execute
```json
npm run new-version
```

or simply
```bash
node ./node_modules/.bin/new-version
```
### Using Node API

```javascript
import NewVersion from 'new-version'

NewVersion.log();
```

### Output: 
```
Current version:  0.0.1
Newest version: 0.0.2
```

### API

#### `getCurrentVersion`
Return current installed version of `new-version`

#### `getNewestVersion`
Return newest version of `new-version`. This is an async function

#### `log`
Friendly log current version and newest version of `new-version`


<!-- [build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo -->
