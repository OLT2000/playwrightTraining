import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftsPerPattern_content from "../content/shiftsPerPattern_content";
import axeTest from "../helpers/axeTesthelper";
import inputFieldBooleanContinue from "../helpers/inputFieldBooleanContinue";

class ShiftsPerPatternPage {
    private readonly title: string;
    private readonly caption: string;
    private readonly inputField: string;

    constructor() {
        this.title = `label[for="response"]`;
        this.caption = `.govuk-caption-l`;
        this.inputField = `#response`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(shiftsPerPattern_content.pTitle),
                expect(page.locator(this.caption)).toHaveText(shiftsPerPattern_content.pageCaption),
            ]
        );
        await axeTest(page);
    }

    async fillShiftsContinueOn(page: Page, shifts: string): Promise<void> {
        await inputFieldBooleanContinue(
            page,
            this.inputField,
            shifts,
            true
        )
    }
}

export default ShiftsPerPatternPage;