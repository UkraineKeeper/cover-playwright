import { footerElements, menuPages, firstEntryWebElements } from "../page-objects/skeleton";
import { expect } from "@playwright/test";

export async function checkWebPageSkeleton(page) {
    await expect(page.locator(menuPages.wholeHeader)).toBeVisible();
    await expect(page.locator(footerElements.footerMenu)).toBeVisible();
    await expect(page.locator('text=component.')).toHaveCount(0);
    await expect(page.locator('text=components.')).toHaveCount(0);
    await expect(page.locator('text=Not found')).toHaveCount(0);
}

const fs = require('fs');
const path = require('path');

export async function screenFullPage(page, testName) {
    const url = page.url();
    console.log('Current URL:', url);
    console.log('Test Name:', testName);

    const formattedTestName = testName.replace(/[^a-zA-Z0-9]/g, '_');
    const formattedUrl = url.replace(/[^a-zA-Z0-9]/g, '_');

    const now = new Date();
    const date = now.toLocaleDateString('en-GB').replace(/\//g, '-');
    const time = now.toLocaleTimeString('en-GB').replace(/:/g, '-');

    const timestamp = `${date}--${time}`;
    const screenshotName = `${formattedTestName}--${timestamp}--${formattedUrl}.png`;

    const screenshotPath = path.join(__dirname, 'screenshots', screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: true });
}


export async function signUpByEmail(page) {

}

// module.exports = { screenFullPage };