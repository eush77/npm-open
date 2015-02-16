[![npm](https://nodei.co/npm/npm-open.png)](https://nodei.co/npm/npm-open/)

# npm-open

[![Dependency Status][david-badge]][david]

A command-line utility to open the package's homepage (GitHub repository or a website) in the browser.

[david]: https://david-dm.org/eush77/npm-open
[david-badge]: https://david-dm.org/eush77/npm-open.png

## CLI

From any of the project's directories:

```js
$ npm-open
```

For a specific package:

```js
$ npm-open <directory>
```

## Related

- [pkg-open](npm.im/pkg-open) - open homepage by package name.
- [git-open](https://github.com/paulirish/git-open) - open homepage for a Git repository.

`pkg-open` doesn't take into account local packages and thus has to perform additional network requests.

`git-open` works only for git repositories (but npm-installed packages lack `.git`) and can't open the arbitrary home pages since its knowledge is limited by git remotes.

## Install

```shell
npm install -g npm-open
```

## License

MIT
