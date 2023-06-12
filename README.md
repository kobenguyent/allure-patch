# Allure Patch

Tool to build allure generated folder into a single html file.
Inspired by the JavaScript repo [allure-single-html-file-js](https://github.com/aruiz-caritsqa/allure-single-html-file-js) by [Adrien Ruiz Gauder](https://github.com/aruiz-caritsqa)

## What it's doing?
1. Reads contents of allure-generated folder
2. Creates `server.js` file, which has all the data files inside and code to start fake XHR server
3. Patches `index.html` file, so it's using server.js and sinon-9.2.4.js (Taken from [here](https://sinonjs.org/)), and could be run in any browser without `--allow-file-access-from-files` parameter of Chrome browser
4. Creates file `complete.html` with all files built-in in a single file

## Requirements

* Node (v16+)
* You need to have your allure report folder generated (`allure generate './some/path/to/allure/reports/generated/folder'`)

## Installation

```bash
npm install allure-patch
```

## Run as console script

```bash
npx allure-patch ./some/path/to/allure/reports/generated/folder
```

## Options

### ALLURE_REPORT_SANITIZE_ANGLE_BRACKETS
If you set this environment variable to any value, then any angled brackets that appear in the content of the Allure Report (i.e "<" or ">") will be sanitized to "&lt;" or "&gt;"

If you don't add this environment variable, then the angled brackets won't be sanitized.

```bash
ALLURE_REPORT_SANITIZE_ANGLE_BRACKETS=1 npx allure-patch ./some/path/to/allure/generated/folder
```