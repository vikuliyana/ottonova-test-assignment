class assistantPage {
    // Selectors
    get employedStatus() { return cy.get('[data-cy="employment-status-option-employed"]'); }
    get incomeInput() { return cy.get('input[data-cy="income-input"]'); }
    get fullInsuranceType() { return cy.get('[data-cy="full-insurance"]'); }
    get insuranceStartDate() { return cy.get('select[data-cy="ingress-date"]'); }
    get birthDayInput() { return cy.get('input[data-cy="day"]'); }
    get birthMonthInput() { return cy.get('input[data-cy="month"]'); }
    get birthYearInput() { return cy.get('input[data-cy="year"]'); }
    get errorMessage() { return cy.get('.error-message'); }
    get statusNextButton() { return cy.get('button[data-cy="employment-status-continue"]'); }
    get insuranceNextButton() { return cy.get('button[data-cy="insurance-product-continue"]'); }
    get birthdayNextButton() { return cy.get('button[data-cy="birthday-continue"]'); }

    // Actions
    acceptCookies() {
        cy.get('body').then(($body) => {
            // Check in Shadow DOM
            const ucRoot = $body.find('#usercentrics-cmp-ui');
            if (ucRoot.length > 0 && ucRoot[0].shadowRoot) {
                const shadowButton = ucRoot[0].shadowRoot.querySelector('.uc-accept-button');
                if (shadowButton) {
                    cy.wrap(shadowButton).click();
                } else {
                    cy.log('Usercentrics root found, but button not inside.');
                }
            } else {
                cy.log('Cookie banner not found (neither regular nor shadow), skipping.');
            }
        });
    }

    enterBirthday(dateString) {
        const [day, month, year] = dateString.split('.');

        this.birthDayInput.clear().type(day);
        this.birthMonthInput.clear().type(month);
        this.birthYearInput.clear().type(year).blur();
    }
}

export default new assistantPage();