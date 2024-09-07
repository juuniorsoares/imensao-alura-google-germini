// Função para pesquisar filmes e exibir os resultados na página
function pesquisar() {

    // Obter a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    // se o campo estiver vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada Encontrado. Você precisa digitar um nome de um Filme.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Variáveis para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";

    // Iterar sobre os dados dos filmes e criar o HTML para cada filme
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();

        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {

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
        console.log(dado.titulo.includes(campoPesquisa));
    }

    if(!resultados){
        resultados = "<p>Nada foi Encontrado</p>";
    }

    // Atualizar o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
};






