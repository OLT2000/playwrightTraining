import {Page} from "@playwright/test";

async function inputFieldBooleanContinue(
    page: Page,
    selector: string,
    input_value: string,
    to_continue: boolean
): Promise<void> {
    await page.locator(selector).fill(input_value);
    if(to_continue) {
        await page.getByRole("button", {name: "Continue"}).click();
    }
}

export default inputFieldBooleanContinue;