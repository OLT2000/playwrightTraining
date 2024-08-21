import { Page } from 'playwright';
import {expect} from "@playwright/test";
import wantToWorkOut_content from "../content/wantToWorkOut_content";

class WantToWorkOutPage {
    private readonly title: string;
    private readonly caption: string;
    private readonly radioFullYear: string;
    private readonly radioStartPart: string;
    private readonly radioLeavePart: string;
    private readonly radioStartLeavePart: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.caption = `.govuk-caption-l`;
        this.radioFullYear = `label[for="response-0"]`;
        this.radioStartPart = `label[for="response-1"]`;
        this.radioLeavePart = `label[for="response-2"]`;
        this.radioStartLeavePart = `label[for="response-3"]`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all(
            [
                expect(page.locator(this.title)).toHaveText(wantToWorkOut_content.pTitle),
                expect(page.locator(this.caption)).toHaveText(wantToWorkOut_content.pageCaption),
                expect(page.locator(this.radioFullYear)).toHaveText(wantToWorkOut_content.radioFullYear),
                expect(page.locator(this.radioStartPart)).toHaveText(wantToWorkOut_content.radioStartPart),
                expect(page.locator(this.radioLeavePart)).toHaveText(wantToWorkOut_content.radioLeavePart),
                expect(page.locator(this.radioStartLeavePart)).toHaveText(wantToWorkOut_content.radioStartLeavePart),
            ]
        )
    }

    async selectFullYearContinueOn(page: Page): Promise<void> {
        await page.click(this.radioFullYear);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default WantToWorkOutPage;