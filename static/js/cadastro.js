describe('Testes da Página de Cadastro FireLeaf', () => {

  const CADASTRO_URL = 'http://127.0.0.1:3000/cypress/e2e/cadastro.html';
  const REDIRECT_URL = 'cadastro.html';

  beforeEach(() => {
    localStorage.clear();
    cy.visit(CADASTRO_URL);
  });

  // --------------------------------------------------------------------
  // 1 - Verifica se elementos principais da interface existem
  // --------------------------------------------------------------------
  it('Deve exibir corretamente todos os elementos da tela de Cadastro', () => {
    cy.get('.logo img').should('be.visible');
    cy.get('h1').should('contain', 'Cadastro');

    cy.get('#nome').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#data-nascimento').should('be.visible');
    cy.get('#senha').should('be.visible');
    cy.get('#confirmar').should('be.visible');
    cy.get('.cadastrar-btn').should('be.visible').and('contain', 'Cadastrar');
    cy.get('.link-login').should('contain', 'Já tem conta? Faça login');
  });

  // --------------------------------------------------------------------
  // 2 - Campos vazios devem exibir mensagem de erro
  // --------------------------------------------------------------------
  it('Deve impedir Cadastro com campos vazios', () => {
    cy.get('#nome').should('have.attr', 'required');
    cy.get('#email').should('have.attr','required');
    cy.get('#data-nascimento').should('have.attr','required');
    cy.get('#senha').should('have.attr','required');
    cy.get('#confirmar').should('have.attr','required');
  });

  // --------------------------------------------------------------------
  // 3 - Cadastro correto deve redirecionar para Login.html
  // --------------------------------------------------------------------
    it('Testar redirecionamento do Formulario', () => {
    cy.get('.cadastrar-btn').click();
  });

  // --------------------------------------------------------------------
  // 4 - Teste do link "Login"
  // --------------------------------------------------------------------
  it('Teste no link para a pagina de login', () => {
    cy.get('.link-login').click();
    cy.visit('http://127.0.0.1:3000/cypress/e2e/cadastro.html')
  });


});

