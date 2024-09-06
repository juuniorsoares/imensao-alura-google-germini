// Função para pesquisar filmes e exibir os resultados na página
function pesquisar() {
    console.log("clicou"); // Indica que a função foi chamada
};

// Obter a seção onde os resultados serão exibidos
let section = document.getElementById("resultados-pesquisa");

// Variável para armazenar o HTML dos resultados
let resultados = "";

// Iterar sobre os dados dos filmes e criar o HTML para cada filme
for (let dado of dados) {
    // Criar um elemento div para cada resultado
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="https://pt.wikipedia.org/wiki/Surf%27s_Up" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">Sinopse: ${dado.sinopse}.</p>
        <p class="descricao-meta">Gênero: ${dado.genero}.</p>
        <p class="descricao-meta"> Ano de lançamento: ${dado.ano}.</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
    </div>
    `
}

// Atualizar o conteúdo da seção com os resultados da pesquisa
section.innerHTML = resultados;





