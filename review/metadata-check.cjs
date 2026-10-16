const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium } = require('C:/Users/mizar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true});
 try {
  const page=await browser.newPage();
  await page.goto('http://127.0.0.1:3002',{waitUntil:'networkidle'});
  for(const selector of ['meta[property="og:title"]','meta[property="og:description"]','meta[property="og:image"]','meta[name="twitter:image"]','link[rel="icon"]','link[rel="apple-touch-icon"]']) {
   const tag=page.locator(selector).first(); assert.equal(await tag.count(),1,selector);
   const value=await tag.getAttribute(selector.startsWith('link')?'href':'content'); console.log(selector,value);
   if(selector.includes('image')||selector.startsWith('link')) {
    const response=await page.request.get(new URL(value,page.url()).href); assert.equal(response.status(),200);
    if(selector==='meta[property="og:image"]') await fs.writeFile('review/og-preview.png',await response.body());
   }
  }
  for(const [path,w,h] of [['/opengraph-image',1200,630],['/twitter-image',1200,630],['/apple-icon',180,180]]){
    const response=await page.request.get('http://127.0.0.1:3002'+path);const data=await response.body();assert.equal(data.readUInt32BE(16),w);assert.equal(data.readUInt32BE(20),h);
  }
  console.log('PASS: OG/Twitter metadata, icon links, HTTP 200 and PNG dimensions');
 } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
