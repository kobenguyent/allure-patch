#!/usr/bin/env node
const fs = require('fs');
const  { combineAllureReport } = require('./combineAllureReport');

const [allureReportDir] = process.argv.slice(2);
if (!allureReportDir) {
  throw new Error('You must specify the allure-report directory\nE.g: node ./bin/index.js ../allure_gen');
}

if (!fs.existsSync(allureReportDir)) {
  throw new Error(`Cannot find directory '${allureReportDir}'`);
}

if (!fs.lstatSync(allureReportDir).isDirectory()) {
  throw new Error(`'${allureReportDir}' exists, but it is not a directory`);
}

combineAllureReport(allureReportDir);
