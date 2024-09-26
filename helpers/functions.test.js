import { footerElements, menuPages, firstEntryWebElements } from "../page-objects/skeleton";
import { expect } from "@playwright/test";

export async function checkWebPageSkeleton(page) {
    await expect(page.locator(menuPages.wholeHeader)).toBeVisible({ timeout: 30000 });
    // await expect(page.locator(menuPages.menuHeader)).toBeVisible(); // only for web
    await expect(page.locator(footerElements.footerMenu)).toBeVisible();
    // await expect(page.locator(firstEntryWebElements.switchLanguageModal)).toBeVisible({ timeout: 30000 });
    await page.locator(firstEntryWebElements.selectFirstLangInModal).click({ timeout: 30000 });
    await expect(page.locator(firstEntryWebElements.selectFirstLangInModal)).toHaveCount(0);
    await expect(page.locator('text=component.')).toHaveCount(0);
    await expect(page.locator('text=components.')).toHaveCount(0);
}

const fs = require('fs');
const path = require('path');

export async function screenFullPage(page, testName) {
    const url = page.url();
    console.log('Current URL:', url);
    console.log('Test Name:', testName);

    const formattedTestName = testName.replace(/[^a-zA-Z0-9]/g, '_');
    const formattedUrl = url.replace(/[^a-zA-Z0-9]/g, '_');
    const timestamp = new Date().toISOString();
    const screenshotName = `${formattedTestName}--${timestamp}--${formattedUrl}.png`;

    const screenshotPath = path.join(__dirname, 'screenshots', screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: true });
}

// module.exports = { screenFullPage };