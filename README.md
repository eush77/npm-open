[![npm](https://nodei.co/npm/npm-open.png)](https://nodei.co/npm/npm-open/)

# npm-open

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

A command-line utility to open the package's homepage (GitHub repository or a website) in the browser.

[travis]: https://travis-ci.org/eush77/npm-open
[travis-badge]: https://travis-ci.org/eush77/npm-open.svg
[david]: https://david-dm.org/eush77/npm-open
[david-badge]: https://david-dm.org/eush77/npm-open.png

## CLI

From any of the project's directories:

```
$ npm-open [--npm]
```

For a specific package:

```
$ npm-open [--npm] <directory>
```

Add `--npm` flag to open the page on [npmjs.org](http://npmjs.org), if this is what you really want.

## API

### `npmOpen(directory)`

Pass `process.cwd()` to emulate the first form.

### `npmOpen.npm(directory)`

## Related

- [pkg-open](http://npm.im/pkg-open) - open homepage by package name.
- [git-open](https://github.com/paulirish/git-open) - open homepage for a Git repository.

`pkg-open` doesn't take into account local packages and thus has to perform additional network requests.

`git-open` works only for git repositories (but npm-installed packages lack `.git`) and can't open the arbitrary home pages since its knowledge is limited to git remotes.

## Install

```shell
npm install -g npm-open
```

## License

MIT
