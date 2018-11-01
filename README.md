create-component
================

Creates a component, associated CSS, test file, and surrounding folder.

Saves time creating files, adding boilerplate, and writing the first simple test. No more copy/pasting old files as examples.

## Usage

```
$ npm install -g git+ssh://git@github.com/svirtryu/create-component#semver:^1.1.0
```

```
$ create-component <ComponentName> [targetDirectory]
```

## Output

```
$ create-component MyComponent
Creating directory MyComponent.
Creating file MyComponent/MyComponent.js.
Creating file MyComponent/MyComponent.css.
Creating file MyComponent/MyComponent.test.js.
$ ls
MyComponent/
$ cd MyComponent
$ ls
MyComponent.css
MyComponent.js
MyComponent.test.js
```

Assumes you are using:

* `css-modules`
* `jest`
* `react`
* `enzyme`
