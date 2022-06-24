import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';

/**
 * @see 참고해서 계산기 컴포넌트 테스트 코드 작성
 */
describe('최상위 컴포넌트 호출', () => {
  it('화면의 구성이 정상적인지 확인', () => {
    mount(<App />);
    // now use standard Cypress commands
    cy.contains('54,000').should('be.visible');
    cy.contains('AC').should('be.visible');
    cy.contains('%').should('be.visible');
    cy.contains('/').should('be.visible');
    cy.contains('X').should('be.visible');
    cy.contains('-').should('be.visible');
    cy.contains('+').should('be.visible');
    cy.contains('=').should('be.visible');
    cy.contains('0').should('be.visible');
    cy.contains('1').should('be.visible');
    cy.contains('2').should('be.visible');
    cy.contains('3').should('be.visible');
    cy.contains('4').should('be.visible');
    cy.contains('4').should('be.visible');
    cy.contains('5').should('be.visible');
    cy.contains('6').should('be.visible');
    cy.contains('7').should('be.visible');
    cy.contains('8').should('be.visible');
    cy.contains('9').should('be.visible');
  });
});
