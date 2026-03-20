describe('Testes da Página de Cadastro FireLeaf', () => {

    const DENUNCIA_URL = 'http://127.0.0.1:3000/cypress/e2e/denuncia.html';
    const REDIRECT_URL = 'denuncia.html';

    beforeEach(() => {
        localStorage.clear();
        cy.visit(DENUNCIA_URL);
    });

    // --------------------------------------------------------------------
    // 1 - Verificar elementos da Interface
    // --------------------------------------------------------------------
    it('Deve exibir corretamente todos os elementos da Interface', () => {
        cy.get('.topo').should('be.visible')
        cy.get('.logo-area img').should('be.visible');
        cy.get('.titulo').should('contain', 'FIRELEAF');
        cy.get('.menu-nav').should('be.visible');
        cy.get('.menu-nav a').should('be.visible');
        cy.get('.denuncia').should('be.visible');
        cy.get('.denuncia h1').should('contain', 'Quer fazer uma denúncia?');
        cy.get('#cadastroForm').should('be.visible');
        cy.get('#nome').should('be.visible');
        cy.get('#local').should('be.visible');
        cy.get('#relato').should('be.visible')
        cy.get('.file-label').should('be.visible')
        cy.get('.file-input').should('be.visible');
        cy.get('.file-name').should('be.visible');
        cy.get('.enviarrelato-btn').should('be.visible');
        cy.get('.Logo-Lateral').should('be.visible');
        cy.get('.home-footer').should('be.visible');
        cy.get('.home-footer p').should('contain', "🔥 PRESERVAR HOJE PARA EXISTIR AMANHÃ 🔥");
    });

    // --------------------------------------------------------------------
    // 2 - Teste dos links nav
    // --------------------------------------------------------------------
    it('Teste dos links de navegaçao da página de denuncia', () => {
        cy.get('.link-inicio').click();
        cy.visit('http://127.0.0.1:3000/cypress/e2e/denuncia.html')
        cy.get('.link-denunciar').click();
        cy.visit('http://127.0.0.1:3000/cypress/e2e/denuncia.html')
        cy.get('.link-info').click();
         cy.get('.link-noticias').click();
    });

    // --------------------------------------------------------------------
    // 4 - Teste obrigatoriedade inputs formulário
    // --------------------------------------------------------------------
    it('Teste de obrigatoriedade de preenchimento do formulário', () => {
        cy.get('#nome').should('have.attr', 'required');
        cy.get('#local').should('have.attr', 'required');
        cy.get('#relato').should('have.attr', 'required');
    });
    // --------------------------------------------------------------------
    // 5 - Teste Formulário
    // --------------------------------------------------------------------
    it('Teste de envio do formulário da página de denuncia', () => {
        cy.get('.enviarrelato-btn').click();
    });



});

