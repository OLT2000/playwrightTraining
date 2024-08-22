import {test} from '@playwright/test';
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import WhenDoesLeaveStart from "./pages/whenDoesLeaveStartPage";
import WhenDoesLeaveStartPage from "./pages/whenDoesLeaveStartPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import holidayEntitlementPage from "./pages/holidayEntitlementPage";
import WantToWorkOutPage from "./pages/wantToWorkOutPage";
import employmentStartDatePage from "./pages/employmentStartDatePage";
import EmploymentStartDate from "./pages/employmentStartDatePage";
import employmentEndDatePage from "./pages/employmentEndDatePage";
import EmploymentEndDate from "./pages/employmentEndDatePage";
import hoursPerShiftPage from "./pages/hoursPerShiftPage";
import HoursPerShiftPage from "./pages/hoursPerShiftPage";
import shiftsPerShiftPatternPage from "./pages/shiftsPerShiftPatternPage";
import ShiftsPerPatternPage from "./pages/shiftsPerShiftPatternPage";
import daysPerPatternPage from "./pages/daysPerPatternPage";
import DaysPerPatternPage from "./pages/daysPerPatternPage";
import SummaryPage from "./pages/summaryPage";

test('POM_Assessment_2', async ({page}) => {
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
        "shifts"
    );

    const wantToWorkOutPage: WantToWorkOutPage = new WantToWorkOutPage();
    await wantToWorkOutPage.checkPageLoads(page);
    await wantToWorkOutPage.selectYearContinueOn(
        page,
        "for someone starting and leaving part way through a leave year"
    );

    const employmentStartDate: employmentStartDatePage = new EmploymentStartDate();
    await employmentStartDate.checkPageLoads(page);
    await employmentStartDate.inputDateAndContinue(
        page,
        "1",
        "1",
        "2019"
    )

    const employmentEndDate: employmentEndDatePage = new EmploymentEndDate();
    await employmentEndDate.checkPageLoads(page);
    await employmentEndDate.inputDateAndContinue(
        page,
        "1",
        "12",
        "2019"
    )

    const hoursPerShift: hoursPerShiftPage = new HoursPerShiftPage();
    await hoursPerShift.checkPageLoads(page);
    await hoursPerShift.fillHoursContinueOn(
        page,
        "8"
    );

    const shiftsPerPattern: shiftsPerShiftPatternPage = new ShiftsPerPatternPage();
    await shiftsPerPattern.checkPageLoads(page);
    await shiftsPerPattern.fillShiftsContinueOn(
        page,
        "5"
    );

    const daysPerPattern: daysPerPatternPage = new DaysPerPatternPage();
    await daysPerPattern.checkPageLoads(page);
    await daysPerPattern.fillDaysContinueOn(
        page,
        "7"
    )

    const summaryPage: SummaryPage = new SummaryPage();
    await summaryPage.checkPageLoads(page);
    await summaryPage.verifyCorrectOutput(
        page,
        "25.70 shifts"
    )

});