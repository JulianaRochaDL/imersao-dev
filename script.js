const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("#campo-busca");
let dados = [];

// Função para carregar os dados do JSON e renderizar os cards iniciais
async function carregarDados() {
  try {
    const resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
    cardContainer.innerHTML = "<p>Houve um erro ao carregar as informações. Tente novamente mais tarde.</p>";
  }
}

function iniciarBusca() {
  const termoBusca = campoBusca.value.toLowerCase();
  const resultados = dados.filter(dado => 
    dado.nome.toLowerCase().includes(termoBusca) || 
    dado.descricao.toLowerCase().includes(termoBusca)
  );
  renderizarCards(resultados);
}

function renderizarCards(esportes) {
  // Limpa o container antes de adicionar os novos cards
  cardContainer.innerHTML = "";

  for (const esporte of esportes){
    const article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
    <h2>${esporte.nome}</h2>
    <p>${esporte.descricao}</p>
    <a href="${esporte.link}" target="_blank">Saiba mais</a>
    `
    cardContainer.appendChild(article);
  }
}

// Carrega os dados assim que o script é executado
carregarDados();