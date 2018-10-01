#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');

const { createFile } = require('../src/utils/files');
const jsTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/default-jsx.template'));
const cssTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/default-css.template'));
const testTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/default-test.template'));

const componentName = process.argv[2];

if (componentName) {
  createFile(componentName, 'js', jsTemplate);
  createFile(componentName, 'css', cssTemplate);
  createFile(componentName, 'test.js', testTemplate);
} else {
  console.log('Usage: create-component <ComponentName>');
}
