import {test, expect} from "@playwright/test";
import { HomePage } from "../page-objects/homePage";

test('submit', async ( {page} ) => {
    await page.goto('/');
});