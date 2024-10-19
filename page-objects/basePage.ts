import { Locator, Page } from "@playwright/test";

class BasePageLocators {
    private page: Page;
    spoilerModeConfirmationButton: Locator;
    cookiesConfirmButton: Locator;
    selectFirstLanguageModal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.spoilerModeConfirmationButton = this.page.locator('button.c-button.c-button--full-width');
        this.cookiesConfirmButton = this.page.locator('div.vfm__content.vfm--outline-none.vfm--prevent-auto')
        this.selectFirstLanguageModal = this.page.locator('//div[contains(@class, "c-modal-lanquage-confirmation")]//div[@class="o-modal__footer"]//button[contains(@class, "c-button c-button--secondary")]')
    }
}

export class BasePage extends BasePageLocators{

    async submitSpoilerBtnClick() {
        await this.spoilerModeConfirmationButton.click();
    }
}