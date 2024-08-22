import { test } from '@playwright/test';
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import WhenDoesLeaveStartPage from "./pages/whenDoesLeaveStartPage";
import holidayEntitlementPage from "./pages/holidayEntitlementPage";
import WantToWorkOutPage from "./pages/wantToWorkOutPage";
import SummaryPage from "./pages/summaryPage";
import WhenDoesLeaveStart from "./pages/whenDoesLeaveStartPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";

test('POM_Assessment_1_Happy_Path', async ({ page }) => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.selectIrregularAndContinueOn(page, "Yes")

    const whenDoesLeaveStart: WhenDoesLeaveStart = new WhenDoesLeaveStartPage();
    await whenDoesLeaveStart.checkPageLoads(page);
    await whenDoesLeaveStart.inputDateAndContinue(
        page,
        "1",
        "1",
        "2020"
    );

    const holidayEntitlement: HolidayEntitlementPage = new holidayEntitlementPage();
    await holidayEntitlement.checkPageLoads(page);
    await holidayEntitlement.selectEntitlementContinueOn(
        page,
        "annualised hours"
    );

    const wantToWorkOutPage: WantToWorkOutPage = new WantToWorkOutPage();
    await wantToWorkOutPage.checkPageLoads(page);
    await wantToWorkOutPage.selectYearContinueOn(page, "for a full leave year");

    const summaryPage: SummaryPage = new SummaryPage();
    await summaryPage.checkPageLoads(page);
    await summaryPage.verifyCorrectOutput(
        page,
        "5.6 weeks"
    )
});