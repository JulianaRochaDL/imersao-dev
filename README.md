Conhecendo os Esportes:

Um projeto simples e moderno para listar e pesquisar informações básicas sobre diversas modalidades esportivas.

Visão Geral do Projeto:

Este projeto é uma Single Page Application (SPA) estática desenvolvida com o objetivo de demonstrar habilidades básicas de manipulação do DOM, Busca Dinâmica de dados e Layout Responsivo usando CSS Grid e Flexbox em um tema Dark Mode.

Os dados dos esportes são carregados a partir de um arquivo JSON local, e a pesquisa é feita em tempo real (busca dinâmica).

Funcionalidades:

* Listagem de Cards: Exibe cards formatados para cada esporte carregado do arquivo data.json.
* Design Responsivo: O layout se adapta perfeitamente a diferentes tamanhos de tela (desktop, tablet e mobile).
* Tema Dark Mode: Estilização moderna e agradável utilizando uma paleta de cores escura com destaque em verde (--primary-color: #4caf50).
* Busca Dinâmica: Filtra os cards em tempo real (input event) à medida que o usuário digita no campo de busca (pesquisando por nome e descrição do esporte).
* Ícones Contextuais: Utiliza emojis (::before no CSS) para adicionar um ícone relevante ao lado do título de cada esporte.
* Carregamento de Dados Assíncrono: Utiliza fetch e async/await para carregar o conteúdo do data.json.

Tecnologias Utilizadas:

* HTML5: Estruturação da página e semântica.
* CSS3: Estilização completa, incluindo variáveis CSS (:root), Flexbox, CSS Grid para o container de cards e Media Queries para responsividade.
* JavaScript (ES6+): Lógica de carregamento de dados, manipulação do DOM e implementação da busca dinâmica.
* Google Fonts (Oswald): Para tipografia com um visual esportivo e robusto.
