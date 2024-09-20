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
    await expect(page.locator('text=Crosshairs')).toHaveCount(0);
}

export async function vlrMenuTextEn(page) {
    await text(page, 'Matches');
    await text(page, 'Tournaments');
    await text(page, 'Players');
    await text(page, 'Teams');
    await text(page, 'News');
    await text(page, 'Pick’ems');
    await text(page, 'Crosshairs');
    await expect(page.locator('text=CS2 Stats on Bo3.gg – Live Scores, CS:GO Statistics, and Tournament News')).toHaveCount(0);
}

export async function dotaMenuTextEn(page) {
    await text(page, 'Matches');
    await text(page, 'News');
    await expect(page.locator('text=CS2 Stats on Bo3.gg – Live Scores, CS:GO Statistics, and Tournament News')).toHaveCount(0);
    await expect(page.locator('text=CS2 Stats on Bo3.gg – Live Scores, CS:GO Statistics, and Tournament News')).toHaveCount(0);
}

export async function sidebarNewsWidgetTextEn(page) {
    await text(page, 'Latest top news')
    await text(page, 'All news')
}

export async function sidebarForumWidgetTextEn(page) {
    await text(page, 'Recent forum')
    await text(page, 'All topics')
}

export async function sidebarFiltersTextEn(page) {
    await text(page, 'Filters')
    await text(page, 'Reset filters')
    await text(page, 'Clear all')
}