const botaoMenu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");

botaoMenu.addEventListener("click", () => {
  menuNav.classList.toggle("ativo");
  botaoMenu.classList.toggle("aberto");
});

const botoesFAQ = document.querySelectorAll(".faq-btn");

botoesFAQ.forEach(botao => {
  botao.addEventListener("click", () => {
    const aberto = botao.classList.contains("aberto");
    botoesFAQ.forEach(b => {
      b.classList.remove("aberto");
      b.nextElementSibling?.remove();
    });
    if (!aberto) {
      botao.classList.add("aberto");
      const resposta = document.createElement("p");
      resposta.classList.add("resposta-faq");
      if (botao.textContent.includes("denunciar")) {
        resposta.textContent = "Você pode denunciar pelo site, clicando em 'Denunciar', ou ligando para o 193.";
      } else if (botao.textContent.includes("áreas em risco")) {
        resposta.textContent = "Nosso mapa mostra em tempo real as regiões mais afetadas por queimadas.";
      } else {
        resposta.textContent = "Mais informações em breve.";
      }
      botao.insertAdjacentElement("afterend", resposta);
    }
  });
});

const btnSaiba = document.querySelector(".btn-saiba");
if (btnSaiba) {
  btnSaiba.addEventListener("click", () => {
    alert("Nosso sistema usa dados de satélites em tempo real para detectar focos de queimadas em todo o território nacional.");
  });
}

console.log("🔥 Fireleaf ativo! Sistema de denúncias e monitoramento carregado.");

