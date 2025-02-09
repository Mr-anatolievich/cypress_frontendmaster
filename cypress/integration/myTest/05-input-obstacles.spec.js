/// <reference types="cypress" />

const { check } = require("prettier");

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {
    cy.get('[data-test="select-input"]').select('Iron Man');
    cy.get('[data-test="select-result"]').contains('Iron Man');
  });

  it('should find and control a checkbox input', () => {
    cy.get('[data-test="checkbox-tomato"]').click().check();
    cy.get('[data-test="checkbox-sardines"]').click().check() 
    cy.get('[data-test="checkbox-result"]').contains('Tomato, Sardines');
  });

  it('should find and control a radio input', () => {
    cy.get('[data-test="radio-ringo"]').check();
    cy.get('[data-test="radio-result"]').contains('Ringo');
  });

  it('should find and control a color input', () => {
    cy.get('[data-test="color-input"]').invoke('val', '#abcdef').trigger('input')
    cy.get('[data-test="color-result"]').contains('#abcdef');
  });

  it('should find and control a date input', () => {
    cy.get('[data-test="date-input"]').invoke('val', '2021-12-17');
    cy.get('[data-test="date-result"]').contains('2021-12-17');
  });

  it.only('should find and control a range input', () => {
    cy.get('[data-test="range-input"]').invoke('val', '6').trigger('input');
    cy.get('[data-test="range-result"]').contains('6');
  });
});
