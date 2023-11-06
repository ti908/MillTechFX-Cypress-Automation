/// <reference types="Cypress" />
import formPage from '../../support/selectors/formPage'

describe('MillTech FX Question 1 Test Suite', () =>
{

before(() => {
    // runs once before all tests in the block
    cy.fixture('userDetails').then(function(details)
            {
    globalThis.details=details
        })
 })
// it('Test case for Scenario 1',function() {
// //cy.visit(Cypress.env('url')+"/automation-practice-form/")
// cy.visit(Cypress.env('url'))
// cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').click()
// cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
// cy.get('#firstName').type('Jane')
// cy.get('#lastName').type('Smith')
// cy.get('#userEmail').type("automation-test@tester.com")
// cy.get('#userNumber').type("1234567891")
//  })

 it('Test case for Scenario 2',function() {
    //
        //cy.visit(Cypress.env('url')+"/automation-practice-form/")
        const formPage = new formPage()
    
        cy.visit(Cypress.env('url'))
        cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    
        // formPage.getInputFirstName().type(globalThis.details.firstName)
        // formPage.getInputLastName().type(globalThis.details.lastName)
        // formPage.getEmail().type(globalThis.details.email)
       // formPage.getGender().click(globalThis.details.gender)
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').check()
        //formPage.getPhoneNumber().type(globalThis.details.mobile)   
        })

})
