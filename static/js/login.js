describe('Testes da Página de Login FireLeaf', () => {

  const LOGIN_URL = 'http://127.0.0.1:3000/cypress/e2e/login.html';
  const REDIRECT_URL = 'login.html';

  beforeEach(() => {
    localStorage.clear();
    cy.visit(LOGIN_URL);
  });

  // --------------------------------------------------------------------
  // 1 - Verifica se elementos principais da interface existem
  // --------------------------------------------------------------------
  it('Deve exibir corretamente todos os elementos da tela de login', () => {
    cy.get('.logo img').should('be.visible');
    cy.get('h1').should('contain', 'FireLeaf');

    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.login-btn').should('be.visible').and('contain', 'Login');
    cy.get('#forgotLink').should('contain', 'Esqueceu a senha?');
  });

  // --------------------------------------------------------------------
  // 2 - Campos vazios devem exibir mensagem de erro
  // --------------------------------------------------------------------
  it('Deve impedir login com campos vazios', () => {
    cy.get('.login-btn').click();

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Por favor, preencha todos os campos.')
      .and('have.css', 'color', 'rgb(255, 0, 0)');
  });

  // --------------------------------------------------------------------
  // 3 - Login incorreto deve exibir mensagem de erro
  // --------------------------------------------------------------------
  it('Deve exibir erro ao inserir usuário ou senha incorretos', () => {
    cy.get('#username').type('naoexiste');
    cy.get('#password').type('12345');

    cy.get('.login-btn').click();

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Usuário ou senha incorretos.');
  });

  // --------------------------------------------------------------------
  // 4 - Login correto deve redirecionar para Página.html
  // --------------------------------------------------------------------
  it('Deve realizar login corretamente e redirecionar', () => {

    const usuario = [{
      nome: 'Carlos',
      email: 'carlos@gmail.com',
      senha: 'Senha@123'
    }];
    localStorage.setItem('usuarios', JSON.stringify(usuario));

    cy.get('#username').type('carlos@gmail.com');
    cy.get('#password').type('Senha@123');

    cy.get('.login-btn').click();

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Login realizado com sucesso');

    cy.wait(1600);

  });

  // --------------------------------------------------------------------
  // 5 - Teste do link "Esqueceu a senha?"
  // --------------------------------------------------------------------
  it('Deve exibir mensagem ao clicar em "Esqueceu a senha?"', () => {
    cy.get('#forgotLink').click();

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Função de recuperação ainda não disponível.');
  });

});

