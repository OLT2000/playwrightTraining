import { Page } from 'playwright';
import {expect} from "@playwright/test";
import hoursPerShift_content from "../content/hoursPerShift_content";
import axeTest from "../helpers/axeTesthelper";
import inputFieldBooleanContinue from "../helpers/inputFieldBooleanContinue";

class HoursPerShiftPage {
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
                expect(page.locator(this.title)).toHaveText(hoursPerShift_content.pTitle),
                expect(page.locator(this.caption)).toHaveText(hoursPerShift_content.pageCaption),
            ]
        );
        await axeTest(page);
    }

    async fillHoursContinueOn(page: Page, hours: string): Promise<void> {
        await inputFieldBooleanContinue(
            page,
            this.inputField,
            hours,
            true
        )
    }

    async fill5ContinueOn(page: Page): Promise<void> {
        await page.locator(this.inputField).fill('5');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default HoursPerShiftPage;