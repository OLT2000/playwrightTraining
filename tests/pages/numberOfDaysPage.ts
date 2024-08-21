import { Page } from 'playwright';
import {expect} from "@playwright/test";
import numberOfDays_content from "../content/numberOfDays_content";

class NumberOfDaysPage {
    private readonly title: string;
    private readonly caption: string;
    private readonly pageHint: string;
    private inputField: string;

    constructor() {
        this.title = `label[for="response"]`;
        this.caption = `.govuk-caption-l`;
        this.pageHint = `.govuk-hint`;
        this.inputField = `#response`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(numberOfDays_content.pTitle),
                expect(page.locator(this.caption)).toHaveText(numberOfDays_content.pageCaption),
                expect(page.locator(this.pageHint)).toHaveText(numberOfDays_content.pageHint),
            ]
        )
    }

    async fill5ContinueOn(page: Page): Promise<void> {
        await page.locator(this.inputField).fill('5');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default NumberOfDaysPage;