import assistantPage from '../../support/page_objects/assistantPage'
import userData from '../../fixtures/user_data.json'

describe('Ottonova Digital Assistant', () => {

    beforeEach(() => {
        // 1. Go to the URL
        cy.visit('/online-beitragsrechner');

        // 2. Accept Cookie Banner
        assistantPage.acceptCookies();
    });

        it('should validate birthdate error messages and proceed with valid data', function () {

            // 3. Select Employment & Income
            assistantPage.employedStatus.click();
            assistantPage.incomeInput.type(userData.validUser.income);
            assistantPage.statusNextButton.click();

            // 4. Select Insurance Type & Date
            assistantPage.fullInsuranceType.click();
            assistantPage.insuranceStartDate.select(userData.validUser.startDate);
            assistantPage.insuranceNextButton.click();

            // 5. Assert Birthdate Errors
            userData.invalidBirthdates.forEach((scenario) => {
                assistantPage.enterBirthday(scenario.value);
                assistantPage.errorMessage.should('contain', scenario.error);
                assistantPage.birthdayNextButton.should('be.disabled');
            });

            // 6. Enter valid birthdate and proceed
            assistantPage.enterBirthday(userData.validUser.birthdate);
            assistantPage.birthdayNextButton.click();

            // Assert navigation to the next page
            cy.url().should('include', '/persoenliche-situation/versicherungsstatus');
            cy.clearAllCookies()
        });
});