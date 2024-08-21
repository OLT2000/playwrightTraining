import {test} from '@playwright/test';
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import WantToWorkOutPage from "./pages/wantToWorkOutPage";
import NumberOfDaysPage from "./pages/numberOfDaysPage";
import SummaryPage from "./pages/summaryPage";

test('POM_Assessment_1', async ({page}) => {
    const landingPage: landingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage: irregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.clickNoContinueOn(page);

    const holidayEntitlementPage: holidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPageLoads(page);
    await holidayEntitlementPage.selectDaysContinueOn(page);

    const wantToWorkOutPage: wantToWorkOutPage = new WantToWorkOutPage();
    await wantToWorkOutPage.checkPageLoads(page);
    await wantToWorkOutPage.selectFullYearContinueOn(page);

    const numberOfDays: numberOfDays = new NumberOfDaysPage();
    await numberOfDays.checkPageLoads(page);
    await numberOfDays.fill5ContinueOn(page);

    const summaryPage: summaryPage = new SummaryPage();
    await summaryPage.checkPageLoads(page);

});