const fs = require('fs');
const { execSync } = require('child_process');
const { patchAllure } = require('../lib/patchAllureReport');

beforeAll(() => {
  fs.cpSync(`${process.cwd()}/test/allure-report`, `${process.cwd()}/test/allure-report-test-1`, { recursive: true });
  fs.cpSync(`${process.cwd()}/test/allure-report`, `${process.cwd()}/test/allure-report-test-2`, { recursive: true });
});

afterAll(() => {
  fs.rmSync(`${process.cwd()}/test/allure-report-test-1`, { recursive: true, force: true });
  fs.rmSync(`${process.cwd()}/test/allure-report-test-2`, { recursive: true, force: true });
});

describe('Create a single HTML allure report file after generating the local files', () => {
  it('Generate single HTML file by calling index()', () => {
    patchAllure(`${process.cwd()}/test/allure-report-test-1`);
    expect(fs.existsSync(`${process.cwd()}/test/allure-report-test-1/complete.html`)).toBeTruthy();
  });

  it('Should throw error when allure report folder is not provided', () => {
    try {
      execSync(`node ${process.cwd()}/index.js`);
    } catch (e) {
      expect(e.message).toContain('You must specify the allure-report directory');
    }
  });

  it('Should throw error when allure report folder is not existed', () => {
    try {
      execSync(`node ${process.cwd()}/index.js ${process.cwd()}/test/allure-report-test-3`);
    } catch (e) {
      expect(e.message).toContain('Cannot find directory');
    }
  });

  it('Generate single HTML file by calling the index.js script', () => {
    const res = execSync(`node ${process.cwd()}/index.js ${process.cwd()}/test/allure-report-test-2`);
    console.log(res.toString('utf8'));
    expect(fs.existsSync(`${process.cwd()}/test/allure-report-test-2/complete.html`)).toBeTruthy();
  });
});
