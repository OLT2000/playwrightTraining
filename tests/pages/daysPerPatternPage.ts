import { Page } from 'playwright';
import {expect} from "@playwright/test";
import daysPerPattern_content from "../content/daysPerPattern_content";
import axeTest from "../helpers/axeTesthelper";
import inputFieldBooleanContinue from "../helpers/inputFieldBooleanContinue";

class DaysPerPatternPage {
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
                expect(page.locator(this.title)).toHaveText(daysPerPattern_content.pTitle),
                expect(page.locator(this.caption)).toHaveText(daysPerPattern_content.pageCaption),
                expect(page.locator(this.pageHint)).toHaveText(daysPerPattern_content.pageHint),
            ]
        );
        await axeTest(page);
    }

    async fillDaysContinueOn(page: Page, days: string): Promise<void> {
        await inputFieldBooleanContinue(
            page,
            this.inputField,
            days,
            true
        )
    }
}

export default DaysPerPatternPage;