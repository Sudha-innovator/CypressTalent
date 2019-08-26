// JavaScript source code
/// <reference types = 'Cypress' />
context('Login Page Test', () =>{

  beforeEach('Visit url', () => {
  
     cy.visit('/')
	 cy.fixture('localVariables').as('localVars')
   });

  describe('Happy path', () => {

    it('Check with correct login info', () =>{
	 
	 cy.get('@localVars').then((localVars) => {
	 
		cy.login(localVars.username, localVars.password)  //Custom command for login

	 })

	 cy.get('[type=submit]').click()

	 cy.title().should('eq', 'Analysis - Talent')
	
	})
 
   })

   describe('UnHappy path', () => {
    
	 it('Check with incorrect details', () =>{
	   cy.get('@localVars').then((localVars) => {
	 
		  cy.login(localVars.username, localVars.wrongPassword)  //Custom command for login

	   })
	 cy.get('[type=submit]').click()

	 //need to add assertion - site is not throwing any error message
	 
	 })

	 it('Check with email as Null', () =>{
	  cy.get('@localVars').then((localVars) => {
	 
		  cy.login(localVars.username, localVars.password)  //Custom command for login

	  })
	  cy.get('#email').clear()
	  cy.get('[type=submit]').click()
	  cy.get('.ant-form-explain').contains('Please enter your email address!')
	 })	 

	 it('Check with password as Null', () =>{

	  cy.get('@localVars').then((localVars) => {
	 
		  cy.login(localVars.username, localVars.password)  //Custom command for login

	  })
	  cy.get('#password').clear()
	  cy.get('[type=submit]').click()
	  cy.get('.ant-form-explain').contains('Please enter your password!')
	 })

   })

})