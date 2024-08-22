import { Page } from 'playwright';
import {expect} from "@playwright/test";
import employmentStartDate_content from "../content/employmentStartDate_content";
import axeTest from "../helpers/axeTesthelper";
import inputFieldBooleanContinue from "../helpers/inputFieldBooleanContinue";

class EmploymentStartDate {
    private readonly title: string;
    private readonly caption: string;
    private readonly dayLabel: string;
    private readonly monthLabel: string;
    private readonly yearLabel: string;
    private readonly dayInput: string;
    private readonly monthInput: string;
    private readonly yearInput: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.caption = `.govuk-caption-l`;
        this.dayLabel = `label[for="response-0"]`;
        this.monthLabel = `label[for="response-1"]`;
        this.yearLabel = `label[for="response-2"]`;
        this.dayInput = `#response-0`;
        this.monthInput = `#response-1`;
        this.yearInput = `#response-2`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(employmentStartDate_content.pageTitle),
                expect(page.locator(this.caption)).toHaveText(employmentStartDate_content.pageCaption),
                expect(page.locator(this.dayLabel)).toHaveText(employmentStartDate_content.dayLabel),
                expect(page.locator(this.monthLabel)).toHaveText(employmentStartDate_content.monthLabel),
                expect(page.locator(this.yearLabel)).toHaveText(employmentStartDate_content.yearLabel),
            ]
        );
        await axeTest(page);
    }

    async inputDateAndContinue(
        page: Page,
        day: string,
        month: string,
        year: string,
    ): Promise<void> {
        await inputFieldBooleanContinue(
            page,
            this.dayInput,
            day,
            false
        );

        await inputFieldBooleanContinue(
            page,
            this.monthInput,
            month,
            false
        );

        await inputFieldBooleanContinue(
            page,
            this.yearInput,
            year,
            true
        );
    }
}

export default EmploymentStartDate;