import {test, expect} from '@playwright/test';

test('calculateNoDaysFull_5', async ({page}) => {
    // 0.1) Set Up Page URL Direct
    await page.goto("https://www.gov.uk/calculate-your-holiday-entitlement");

    // 0.2) set up locator and assert it's value
    const title_locator = page.locator('.govuk-heading-xl');
    await expect(title_locator).toHaveText('Calculate holiday entitlement');

    // 0.3) getByRole start now
    await page.getByRole('button', { name: 'Start now' }).click();

    // 0.4) Assert next page has loaded
    // Expect page title to be correct
    await expect(page).toHaveTitle('Does the employee work irregular hours or for part of the year? - Calculate holiday entitlement - GOV.UK');
    // Expect page to have correct h1
    const heading_locator = page.locator('.govuk-fieldset__heading');
    await expect(heading_locator)
        .toHaveText(`Does the employee work irregular hours or for part of the year?`);

    // 1) Select No for Irregular Hours
    await page.click('label[for="response-1"]');
    await page.getByRole("button", { name: "Continue" }).click();


    // 2) Select No for Days worked per week
    await expect(page.locator(`.govuk-fieldset__heading`))
        .toHaveText(`Is the holiday entitlement based on:`);
    await page.click('label[for="response-0"]');
    await page.getByRole("button", { name: "Continue" }).click();


    // 3) Select full leave year
    await expect(page.locator(`.govuk-fieldset__heading`))
        .toHaveText(`Do you want to work out holiday:`);
    await page.click('label[for="response-0"]');
    await page.getByRole("button", { name: "Continue" }).click();


    // 4) Input 5 for days worked per week
    await expect(page.locator(`.govuk-label-wrapper`))
        .toHaveText(`Number of days worked per week?`);
    await page.locator('#response').fill('5');
    await page.getByRole("button", { name: "Continue" }).click();

    // 5) Verify output is 28
    await expect(page.locator(`.govuk-heading-xl`))
        .toContainText(`Information based on your answers`);
    await expect(page.locator('.summary'))
        .toHaveText('The statutory holiday entitlement is 28 days holiday.');

});


