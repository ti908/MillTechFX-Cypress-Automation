import { formPage } from '../integration/PageObjects/formPage'
const userDetail = require('../fixtures/userDetails.json')
const userDetail_single = require('../fixtures/userDetail-single.json')
const FormPage = new formPage()

describe('MillTech FX Test Suite', () => {
    let index = 0;

    beforeEach(() => {
        // runs once before all tests in the block
        cy.clearAllCookies()
        cy.visit(Cypress.env('url') + "automation-practice-form/")

    })

    it(`Front end automation for single user`, () => {
        let signleUserCharacteristics = Object.keys(userDetail_single);
        FormPage.getInputFirstName().type(userDetail_single.firstName).then($el => FormPage.assertInputField($el, userDetail_single.firstName))
        FormPage.getInputLastName().type(userDetail_single.lastName).then($el => FormPage.assertInputField($el, userDetail_single.lastName))
        FormPage.getEmail().type(userDetail_single.email).then($el => FormPage.assertInputField($el, userDetail_single.email))
        FormPage.getGenderRadioButtons().eq(index).click()
        FormPage.getGenderRadioButtons().eq(index).prev().should('be.checked')
        FormPage.getPhoneNumber().type(userDetail_single.mobile).then($el => FormPage.assertInputField($el, userDetail_single.mobile))
        FormPage.getSubmitButton().should('exist')
        FormPage.getSubmitButton().click({ force: true })
        signleUserCharacteristics.forEach((signleUserCharacteristics) => 
            FormPage.getTableText(userDetail_single[signleUserCharacteristics]).should('exist').and('be.visible'))
    })

    userDetail.forEach(user => {
        let userCharacteristics = Object.keys(user);
        it(`Front end automation for multiple users - name (${user.firstName} ${user.lastName})`, () => {
            FormPage.getInputFirstName().type(user.firstName).then($el => FormPage.assertInputField($el, user.firstName))
            FormPage.getInputLastName().type(user.lastName).then($el => FormPage.assertInputField($el, user.lastName))
            FormPage.getEmail().type(user.email).then($el => FormPage.assertInputField($el, user.email))
            let index = 0;
            if (user.gender === 'female') {
                index = 1
            }
            FormPage.getGenderRadioButtons().eq(index).click()
            FormPage.getGenderRadioButtons().eq(index).prev().should('be.checked')
            FormPage.getPhoneNumber().type(user.mobile).then($el => {
                FormPage.assertInputField($el, user.mobile)
            })
            FormPage.getSubmitButton().should('exist')
            FormPage.getSubmitButton().click({ force: true })
            userCharacteristics.forEach((userCharacteristic) => { 
                FormPage.getTableText(user[userCharacteristic]).should('exist').and('be.visible') })
        })
    })

})
