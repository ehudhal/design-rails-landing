const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  // Load the local HTML file
  const filePath = 'file://' + path.join(__dirname, 'index.html');
  await page.goto(filePath);

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Scroll directly to the problem section element
  await page.evaluate(() => {
    const problemSection = document.querySelector('.problem-section');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  await page.waitForTimeout(1000);

  // Take screenshot
  await page.screenshot({
    path: 'screenshot-problem-direct.png'
  });

  console.log('✓ Problem section screenshot captured');

  // Get the actual title text
  const titleText = await page.locator('.problem-section .section-title').textContent();
  console.log('Problem section title text:', titleText);

  await browser.close();
})();
