const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        //await page.goto('https://8081-bcbdcddffbbabfefabadabafabfacdbcfbacffcabbf.examlyiopb.examly.io');
        await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
        await page.type('[data-testid="name"]', 'test');
        await page.type('[data-testid="email"]', 'test@iamneo.ai');
        await page.type('[data-testid="contactno"]', '123');
        await page.type('[data-testid="image"]', 'https://picsum.photos/536/354');
        
        await page.click('[data-testid="create"]');
        await page.waitForSelector('[data-testid="cardname"]', {timeout : 1500});
        await page.waitForSelector('[data-testid="cardemail"]', {timeout : 1500});
        await page.waitForSelector('[data-testid="contactnumber"]', {timeout : 1500});
        
        console.log('TESTCASE:test_case6:success');
    }
     catch(e){
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();