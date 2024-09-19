import {expect} from "@playwright/test";

export async function text(page, name) {
    await expect(page.locator(`text=${name}`).first()).toBeVisible();
}

export async function footerTextEn(page) {
    await text(page, 'Premium subscription');
    await text(page, 'Privacy policy');
    await expect(page.locator('text=component.')).toHaveCount(0);
}

export async function csMenuTextEn(page) {
    await text(page, 'Matches');
    await text(page, 'Tournaments');
    await text(page, 'Players');
    await text(page, 'Teams');
    await text(page, 'News');
    await text(page, 'Tools');
    await text(page, 'Pick’ems');
}

export async function vlrMenuTextEn(page) {
    await text(page, 'Matches');
    await text(page, 'Tournaments');
    await text(page, 'Players');
    await text(page, 'Teams');
    await text(page, 'News');
    await text(page, 'Pick’ems');
    await text(page, 'Crosshairs');
}