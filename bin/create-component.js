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

if (componentName) {
  createDirectory(componentName);

  const componentFilePath = path.join(componentName, componentName);

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
  console.log('Usage: create-component <ComponentName>');
}
