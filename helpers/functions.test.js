const fs = require('fs');
const path = require('path');

async function screenFullPage(page, testName) {
    const url = page.url();
    console.log('Current URL:', url);
    console.log('Test Name:', testName);

    const formattedTestName = testName.replace(/[^a-zA-Z0-9]/g, '_');
    const formattedUrl = url.replace(/[^a-zA-Z0-9]/g, '_');
    const timestamp = new Date().toISOString();
    const screenshotName = `${formattedTestName}--${timestamp}--${formattedUrl}.png`;

    const screenshotPath = path.join(__dirname, 'screenshots', screenshotName);

    // Переконуємося, що директрія існує
    if (!fs.existsSync(path.dirname(screenshotPath))) {
        fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    }

    // Зробити скріншот з повною сторінкою
    await page.screenshot({ path: screenshotPath, fullPage: true });

    console.log(`Screenshot saved as ${screenshotName}`);
}

module.exports = { screenFullPage };
