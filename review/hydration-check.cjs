const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/mizar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('console', message => {
      if (message.type() === 'error' || /hydration|hydrated|didn.t match/i.test(message.text())) errors.push(message.text());
    });
    page.on('pageerror', error => errors.push(error.message));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('http://127.0.0.1:3002', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'EN', exact: true }).click();
      await page.getByRole('button', { name: 'Select: Audiobook', exact: true }).click();
      await page.getByRole('dialog').waitFor({ state: 'visible' });
      await page.keyboard.press('Escape');
      await page.getByRole('button', { name: 'RU', exact: true }).click();
      assert.equal(await page.locator('h1').innerText(), 'Истина®');
    }
    assert.deepEqual(errors, [], 'Browser console must have no hydration warnings or errors');
    console.log('PASS: hydration console, RU/EN and audio modal at 1440px and 390px');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
