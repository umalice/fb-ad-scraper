const puppeteer = require("puppeteer");

async function run() {
  const download_path = '/Users/alice/Desktop/'

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200 });
  await page.goto("https://www.facebook.com/ads/library/report/");
  await page._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: download_path,
  });

  await page.click('.\_7vio');
  await page.waitFor(5000);

  browser.close();
}

run();
