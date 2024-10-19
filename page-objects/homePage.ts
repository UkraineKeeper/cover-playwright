import { Locator, Page } from "@playwright/test";

class HomePageLocators {
    private page: Page;
    protected goToPickem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.goToPickem = this.page.locator('//*');
    }
}

export class HomePage extends HomePageLocators{

    async clickGoToPickem() {
        await this.goToPickem.click();
    }
}