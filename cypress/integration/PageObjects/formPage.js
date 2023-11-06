export class formPage {

    getInputFirstName() {
        return cy.get('[id="firstName"]')
    }

    getInputLastName() {
        return cy.get('[id="lastName"]')
    }

    getEmail() {
        return cy.get('[id="userEmail"]')
    }

    getPhoneNumber() {
        return cy.get('[id="userNumber"]')
    }

    getGenderFemale() {
        return cy.get('#genterWrapper > .col-md-9 > :nth-child(2)')
    }

    getGenderRadioButtons() {
        return cy.get('label[for*="gender-radio-"]')
    }
    getSubmitButton() {
        return cy.get('button[id="submit"]')
    }
    getRegisteredUserModal() {
        return cy.get('div[id*="modal-title"]')
    }
    getTableText(userDetail) {
        return cy.get('[class="modal-body"]').contains(userDetail, { matchCase: false })
    }

    assertInputField($el, text) {
        const elementText = $el[0].value
        expect(elementText.length).to.be.greaterThan(0)
        expect(elementText).to.be.equal(text)
    }
};