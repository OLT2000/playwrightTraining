import { Page } from 'playwright';
import {expect} from "@playwright/test";
import holidayEntitlement_content from "../content/holidayEntitlement_content";

class HolidayEntitlementPage {
    private readonly title: string;
    private readonly hint: string;
    private readonly caption: string;
    private readonly radio0: string;
    private readonly radio1: string;
    private readonly radio2: string;
    private readonly radio3: string;
    private readonly radio4: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.hint = `.govuk-hint`;
        this.caption = `.govuk-caption-l`;
        this.radio0 = `label[for="response-0"]`;
        this.radio1 = `label[for="response-1"]`;
        this.radio2 = `label[for="response-2"]`;
        this.radio3 = `label[for="response-3"]`;
        this.radio4 = `label[for="response-4"]`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(holidayEntitlement_content.pTitle),
                expect(page.locator(this.hint)).toHaveText(holidayEntitlement_content.Hint),
                expect(page.locator(this.caption)).toHaveText(holidayEntitlement_content.pageCaption),
                expect(page.locator(this.radio0)).toHaveText(holidayEntitlement_content.radio0),
                expect(page.locator(this.radio1)).toHaveText(holidayEntitlement_content.radio1),
                expect(page.locator(this.radio2)).toHaveText(holidayEntitlement_content.radio2),
                expect(page.locator(this.radio3)).toHaveText(holidayEntitlement_content.radio3),
                expect(page.locator(this.radio4)).toHaveText(holidayEntitlement_content.radio4),
            ]
        )
    }

    async selectDaysContinueOn(page: Page): Promise<void> {
        await page.click(this.radio0);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default HolidayEntitlementPage;