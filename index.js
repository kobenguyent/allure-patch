#!/usr/bin/env node
const fs= require('fs');
const  { patchAllure: index } = require('./lib/patchAllureReport');

const [allureReportDir] = process.argv.slice(2);
if (!allureReportDir) {
  throw new Error('You must specify the allure-report directory\nE.g: node ./index.js ../allure_gen');
}

if (!fs.existsSync(allureReportDir)) {
  throw new Error(`Cannot find directory '${allureReportDir}'`);
}

if (!fs.lstatSync(allureReportDir).isDirectory()) {
  throw new Error(`'${allureReportDir}' exists, but it is not a directory`);
}

index(allureReportDir);
