import { Page } from 'playwright';
import {expect} from "@playwright/test";
import holidayEntitlement_content from "../content/holidayEntitlement_content";
import axeTest from "../helpers/axeTesthelper";
import radioSelectAndContinue from "../helpers/radioSelectAndContinue";

class HolidayEntitlementPage {
    private readonly title: string;
    private readonly hint: string;
    private readonly caption: string;
    private readonly radio_options: { [key: string]: string };

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.hint = `.govuk-hint`;
        this.caption = `.govuk-caption-l`;
        this.radio_options = {
            "days worked per week": `label[for="response-0"]`,
            "hours worked per week": `label[for="response-1"]`,
            "annualised hours": `label[for="response-2"]`,
            "compressed hours": `label[for="response-3"]`,
            "shifts": `label[for="response-4"]`
        }
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(holidayEntitlement_content.pTitle),
                expect(page.locator(this.hint)).toHaveText(holidayEntitlement_content.Hint),
                expect(page.locator(this.caption)).toHaveText(holidayEntitlement_content.pageCaption),
            ]
        );

        for (let value of holidayEntitlement_content.radio_options) {
            await expect(page.locator(this.radio_options[value])).toHaveText(value);
        }

        await axeTest(page);
    }

    async selectEntitlementContinueOn(page: Page, selection: string): Promise<void> {
        await radioSelectAndContinue(
            page,
            this.radio_options,
            selection
        );
    }

    async selectDaysContinueOn(page: Page): Promise<void> {
        await page.click(`label[for="response-0"]`);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}
export default HolidayEntitlementPage;