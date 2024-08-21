import { Page } from 'playwright';
import {expect} from "@playwright/test";
import summaryPage_content from "../content/summaryPage_content";

class SummaryPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        this.text = `.summary`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(summaryPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(summaryPage_content.divText),
        ]);
    }
}

export default SummaryPage;