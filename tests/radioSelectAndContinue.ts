import {Page} from "@playwright/test";

async function radioSelectAndContinue(
    page: Page,
    radio_options: { [key: string]: string},
    selection: string
): Promise<void> {
    const radioSelector = radio_options[selection];
    if (!radioSelector) {
        throw new Error(`No radio button found for key ${selection}. Choose one of ${radio_options}`);
    }
    await page.click(radioSelector);
    await page.getByRole("button", { name: "Continue" }).click();
}

export default radioSelectAndContinue;