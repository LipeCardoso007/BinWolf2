// 👉 Função que alterna a visibilidade do submenu ao clicar no botão "LOGIN"
function trocarbutao() {
  const menu = document.getElementById("submenuheader");

  // Se o menu já estiver visível (display flex), ele será escondido
  if (menu.style.display === "flex") {
    menu.style.display = "none"; // esconde o menu
  } else {
    menu.style.display = "flex"; // mostra o menu
  }
}

// 👉 Fecha o menu e remove borda se o usuário clicar fora dele
document.addEventListener("click", function (event) {
  const menu = document.getElementById("submenuheader");
  const botao = document.getElementById("submenu2");

  // Se o clique NÃO foi dentro do menu e nem no botão
  if (!menu.contains(event.target) && !botao.contains(event.target)) {
    menu.style.display = "none";               // esconde o menu
    botao.classList.remove("ativo");           // remove a borda vermelha do botão (se estiver ativa)
  }
});

// 👉 Adiciona/remover classe 'ativo' em todos os botões com a classe .bntheader
document.querySelectorAll('.bntheader').forEach(botao => {
  botao.addEventListener('click', () => {
    botao.classList.toggle('ativo'); // ativa ou desativa a borda (classe .ativo)
  });
});

// 👉 Função genérica para ativar ou desativar um botão passado como parâmetro
function ativarBotao(botao) {
  if (botao.classList.contains("ativo")) {
    botao.classList.remove("ativo"); // se já estiver ativo, desativa
  } else {
    botao.classList.add("ativo");    // se não estiver ativo, ativa
  }
}

// 👉 Detecta cliques fora de QUALQUER botão .bntheader para desativar
document.addEventListener("click", function(event) {
  const botoes = document.querySelectorAll(".bntheader");

  botoes.forEach((btn) => {
    // Se o clique for fora do botão, remove a classe 'ativo'
    if (!btn.contains(event.target)) {
      btn.classList.remove("ativo");
    }
  });
});
