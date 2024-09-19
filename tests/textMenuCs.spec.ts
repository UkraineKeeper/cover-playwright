import {test} from "@playwright/test";
import { csMenuTextEn, footerTextEn, vlrMenuTextEn } from "../helpers/textFunctions.test";
import { visitHomePage, gotoVlr } from "../helpers/navigateTo.test";
import { screenFullPage } from "../helpers/functions.test";

test.beforeEach(async ({ page }) => {
    await visitHomePage(page)
});

test.afterEach(async ({page}) => {
    await await screenFullPage(page, 'Test Screenshot Example');
})

test.describe('Test Suite', () => {

    test('tCSm-1 Verify text elements on homepage', async ({ page }) => {

        await csMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tCSm-2', async ({ page }) => {

        await gotoVlr(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
    });

});