const {chromium}=require('C:/Users/mizar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{const b=await chromium.launch({headless:true});const p=await b.newPage({viewport:{width:1440,height:980}});await p.goto('http://127.0.0.1:3002',{waitUntil:'networkidle'});await p.screenshot({path:'review/first-screen.png'});await b.close()})();
