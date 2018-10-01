#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const mustache = require('mustache');

const { createFile, createDirectory } = require('../src/utils/files');
const jsTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/default-jsx.template')).toString();
const cssTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/default-css.template')).toString();
const testTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/default-test.template')).toString();

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
