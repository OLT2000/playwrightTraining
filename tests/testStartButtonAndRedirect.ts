import {test, expect, chromium, Browser} from '@playwright/test';

test('testStartButtonAndRedirect.spec', async ({page}) => {
    // 1) Set Up Page URL Direct
    await page.goto("https://www.gov.uk/calculate-your-holiday-entitlement");

    // 2) set up locator and assert it's value
    const title_locator = page.locator('.govuk-heading-xl');
    await expect(title_locator).toHaveText('Calculate holiday entitlement');

    // 3) getByRole start now
    await page.getByRole('button', { name: 'Start now' }).click();

    // 4) Assert next page has loaded
    // Expect page title to be correct
    await expect(page).toHaveTitle('Does the employee work irregular hours or for part of the year? - Calculate holiday entitlement - GOV.UK');
    // Expect page to have correct h1
    const heading_locator = page.locator('.govuk-fieldset__heading');
    await expect(heading_locator)
        .toHaveText(`Does the employee work irregular hours or for part of the year?`);
});
