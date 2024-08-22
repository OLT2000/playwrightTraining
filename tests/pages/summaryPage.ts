import { Page } from 'playwright';
import {expect} from "@playwright/test";
import summaryPage_content from "../content/summaryPage_content";
import axeTest from "../helpers/axeTesthelper";

class SummaryPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        this.text = `.govuk-govspeak`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(summaryPage_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async verifyCorrectOutput(
        page: Page,
        holiday_val: string
    ): Promise<void> {
        await expect(page.locator(this.text)).toContainText(holiday_val)
    }
}

export default SummaryPage;