import { expect } from "@playwright/test";

export async function visitHomePage(page) {
    await page.goto('/');
    await expect(page.locator('.o-wrapper.o-wrapper--global > a')).toBeVisible();
    await expect(page.locator('button.c-button.c-button--full-width')).toBeVisible();
    await expect(page.locator('div[class="vfm__content vfm--outline-none"] > header > h3')).toBeVisible();
    await page.locator('.o-modal__footer.o-layout__item :first-child').click();
    await page.locator('button[class="c-button c-button--secondary"] ~ button').click();
}

export async function gotoVlr(page) {
    await page.locator('.c-global-main-header-discipline-switcher__current > .discipline-row').click()
    await page.locator(':nth-child(2) > .discipline-row').click()
    await expect(page.locator('div.discipline-row')).toHaveText('Valorant');
    await page.waitForURL('**/valorant');
    const currentUrl = page.url();
    await expect(currentUrl).toContain('/valorant');
    // cy.get(menuPages.selectedDiscipline).should('have.text', 'Valorant')
  }
