create-component
================

Creates a component, associated CSS, test file, and surrounding folder.

Saves time creating files, adding boilerplate, and writing the first simple test. No more copy/pasting old files as examples.

## Usage

```
$ npm install -g git+ssh://git@github.com/svirtryu/create-component#semver:^1.0.0
```

```
$ create-component <ComponentName>
```

## Output

```
$ create-component MyComponent
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
