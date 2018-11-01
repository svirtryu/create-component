#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const mustache = require('mustache');

const {
  readTemplateToString,
  createFile,
  createDirectory,
} = require('../src/utils/files');
const jsTemplate = readTemplateToString('default-jsx');
const cssTemplate = readTemplateToString('default-css');
const testTemplate = readTemplateToString('default-test');

const componentName = process.argv[2];
const targetDirectory = process.argv[3] || './';

if (componentName) {
  createDirectory(path.join(targetDirectory, componentName));

  const componentFilePath = path.join(targetDirectory, componentName, componentName);

  createFile(
    componentFilePath,
    'js',
    mustache.render(jsTemplate, { componentName }),
  );
  createFile(
    componentFilePath,
    'css',
    mustache.render(cssTemplate, { componentName }),
  );
  createFile(
    componentFilePath,
    'test.js',
    mustache.render(testTemplate, { componentName }),
  );
} else {
  console.log('Usage: create-component <ComponentName> [<targetDirectory>]');
}
