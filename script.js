const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);



function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultadosPesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
             <div class="infos">
              <h1 class="content-title">DIV</h1><br>
              <p class="content-description">
                O div é como um contêiner genérico no HTML. Imagine caixas que você usa para organizar seus pertences. No HTML, o div serve para agrupar outros elementos (como texto, imagens, outros divs) e aplicar estilos a eles.
              </p><br>
              <p>exemplo: <code>
&lt;div&gt;Este é o conteúdo do div&lt;/div&gt;
</code></p>
            </div>`;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

