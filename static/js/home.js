describe('Testes da Página de Cadastro FireLeaf', () => {

  const HOME_URL = 'http://127.0.0.1:3000/cypress/e2e/home.html';
  const REDIRECT_URL = 'denuncia.html';

  beforeEach(() => {
    localStorage.clear();
    cy.visit(HOME_URL);
  });

  // --------------------------------------------------------------------
  // 1 - Verificar elementos da Interface
  // --------------------------------------------------------------------
  it('Deve exibir corretamente todos os elementos da interface', () => {
    cy.get('.logo-area img').should('be.visible');
    cy.get('h1').should('contain', 'FIRELEAF');

    cy.get('.menu-nav').should('be.visible')
    cy.get('.menu-nav a').should('be.visible')
    cy.get('.conteudo-principal').should('be.visible');
    cy.get('.operacoes').should('be.visible');
    cy.get('.mapa-container').should('be.visible');
    cy.get('.mapa').should('be.visible');
    cy.get('.descricao-mapa').should('be.visible').should('contain', 'Acompanhamento de queimadas em tempo real via satélite.')
    cy.get('.btn-saiba').should('be.visible').should('contain', 'Saiba Mais')
    cy.get('.faq').should('be.visible')
    cy.get('.faq-btn').should('be.visible').should('contain', 'Como posso denunciar?')
    cy.get('.faq-btn2').should('be.visible').should('contain', 'Como saber áreas em risco?')
    cy.get('.rodape').should('be.visible')
    cy.get('.contatos').should('be.visible')
  });

  // --------------------------------------------------------------------
  // 2 - Teste links main
  // --------------------------------------------------------------------
  it('Testar redirecionamento do Formulário', () => {
    cy.get('.faq-btn').click();
    cy.get('.faq-btn2').click();
    cy.get('.btn-saiba').click();
  });

  // --------------------------------------------------------------------
  // 3 - Teste links nav
  // --------------------------------------------------------------------
    it('Teste dos links de navegaçao da página de home', () => {
        cy.get('.link-inicio').click();
        cy.visit('http://127.0.0.1:3000/cypress/e2e/denuncia.html')
        cy.get('.link-denunciar').click();
        cy.visit('http://127.0.0.1:3000/cypress/e2e/denuncia.html')
        cy.get('.link-info').click();
        cy.get('.link-noticias').click();
        cy.visit('http://127.0.0.1:3000/cypress/e2e/denuncia.html')
    });

});

