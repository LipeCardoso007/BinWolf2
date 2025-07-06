
const imagens = [
  {
    src: "IMG/A.jpg",
    titulo: "Criação e Desenvolvimento de Sites",
    texto: "Site para pizzaria com sistema de cardápio online e pedidos por WhatsApp."
  },
  {
    src: "IMG/B.jpg",
    titulo: "Design Visual e UX/UI (Experiência do Usuário / Interface do Usuário)",
    texto: "E-commerce de roupas com carrinho integrado e layout responsivo."
  },
  {
    src: "IMG/C.jpg",
    titulo: "Manutenção e Atualização de Sites",
    texto: "Landing page para lançamento de curso com formulário e animações."
  }
];

let atual = 0;

function mostrarSlide(index) {
  const imagem = document.getElementById("carrossel-img");
  const titulo = document.getElementById("carrossel-titulo");
  const texto = document.getElementById("carrossel-texto");

  imagem.src = imagens[index].src;
  titulo.innerText = imagens[index].titulo;
  texto.innerText = imagens[index].texto;
}

function proximoSlide() {
  atual = (atual + 1) % imagens.length;
  mostrarSlide(atual);
}

function anteriorSlide() {
  atual = (atual - 1 + imagens.length) % imagens.length;
  mostrarSlide(atual);
}

// Inicia o carrossel automático
setInterval(proximoSlide, 4000);