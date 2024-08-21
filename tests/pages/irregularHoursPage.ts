import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";

class IrregularHoursPage {
    private readonly title: string;
    private readonly hint: string;
    private readonly radioYes: string;
    private readonly radioNo: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.hint = `.govuk-hint`;
        this.radioYes = `label[for="response-0"]`;
        this.radioNo = `label[for="response-1"]`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(irregularHoursPage_content.pTitle),
                expect(page.locator(this.hint)).toHaveText(irregularHoursPage_content.pHint),
                expect(page.locator(this.radioYes)).toHaveText(irregularHoursPage_content.radioYes),
                expect(page.locator(this.radioNo)).toContainText(irregularHoursPage_content.radioNo),
            ]);
    }

    async clickNoContinueOn(page: Page): Promise<void> {
        await page.click('label[for="response-1"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}
export default IrregularHoursPage;
