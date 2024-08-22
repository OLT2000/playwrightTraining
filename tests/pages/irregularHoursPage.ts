import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";
import axeTest from "../helpers/axeTesthelper";
import radioSelectAndContinue from "../helpers/radioSelectAndContinue";

class IrregularHoursPage {
    private readonly title: string;
    private readonly hint: string;
    private readonly radio_options: { [key: string]: string }

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.hint = `.govuk-hint`;
        this.radio_options = {
            "Yes": `label[for="response-0"]`,
            "No": `label[for="response-1"]`
        }
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(irregularHoursPage_content.pTitle),
                expect(page.locator(this.hint)).toHaveText(irregularHoursPage_content.pHint),
            ]);

        for (let value of irregularHoursPage_content.radio_options) {
            await expect(page.locator(this.radio_options[value])).toHaveText(value);
        }

        await axeTest(page);
    }

    async selectIrregularAndContinueOn(page: Page, selection: string): Promise<void> {
        await radioSelectAndContinue(
            page,
            this.radio_options,
            selection
        );
    }

    async clickNoContinueOn(page: Page): Promise<void> {
        await page.click('label[for="response-1"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}
export default IrregularHoursPage;
