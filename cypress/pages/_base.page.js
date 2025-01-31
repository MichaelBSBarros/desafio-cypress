export default class Base {
  static getElement(element, index = undefined) {
    let elem;

    if (typeof index !== 'undefined' || index > 0) {
      elem = cy.get(element, { timeout: Cypress.env('global_timeout') }).eq(index);
    } else {
      elem = cy.get(element, { timeout: Cypress.env('global_timeout') });
    }
    return elem;
  }

  static getElementContaining(text) {
    return cy.contains(text, { timeout: Cypress.env('global_timeout') }).should('be.visible');
  }

  static getElementByXPath(element, index) {
    let elem;

    if (typeof index !== 'undefined' || index > 0) {
      elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') }).eq(index);
    } else {
      elem = cy.xpath(element, { timeout: Cypress.env('global_timeout') });
    }

    return elem;
  }

  static validateText(baseValue, comparingValue) {
    expect(baseValue).to.contains(comparingValue);
  }

  static validateElementText(element, value, index = undefined) {
    cy.getText(element, index).then((text) => {
      expect(text).to.contains(value);
    });
  }

  static getElementText(element, index = undefined) {
    return cy.get(element, index).invoke('text');
  }

  static typeValue(element, value, force = false) {
    if (force === true) {
      cy.get(element).type(value, { force: true });
    } else {
      cy.get(element).type(value);
    }
  }

  static typeValueXPath(element, value, force = false) {
    if (force === true) {
      cy.getByXPath(element).type(value, { force: true });
    } else {
      cy.getByXPath(element).type(value);
    }
  }

  static typeWithDay(element, value) {
    cy.get(element).type(value, { timeout: Cypress.env('global_timeout') });
  }

  static clickOnElement(element, index = undefined, force = false) {
    if (force === true) {
      return cy.get(element, index).click({ force: true });
    } else {
      return cy.get(element, index).click();
    }
  }

  static verifyIfElementExists(element) {
    cy.get(element).should('exist', { timeout: Cypress.env('global_timeout') });
  }

  static verifyIfElementIsHidden(element) {
    cy.get(element).should('not.be.visible', { timeout: Cypress.env('global_timeout') });
  }

  static waitElementAndSelectOption(element, option) {
    return cy.get(element).should('be.visible').select(option);
  }

  static validarPrimeiroElementoDoArray(array, value) {
    cy.get(array).first().should('contain', value)
  }
  
}
