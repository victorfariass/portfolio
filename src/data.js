import projectsImages from "./images/projects";
import skillsImages from "./images/hardSkills";

export const projetos = [
  {
    id: 1,
    name: 'Pixels Art',
    link: 'https://github.com/victorfariass/pixels-art',
    deploy: 'https://victorfariass.github.io/pixels-art/',
    image: projectsImages.pixelsArt,
    techs: [skillsImages.html5, skillsImages.css3, skillsImages.javascript],
    description: 'Foi implementado um editor de arte com pixels. Ou seja, dada uma paleta de cores e um quadro composto por pixels, permite que quem usa consiga pintar o que quiser no quadro.',
  },
  {
    id: 2,
    name: 'To do List',
    link: 'https://github.com/victorfariass/todo-list',
    deploy: 'https://victorfariass.github.io/todo-list/',
    image: projectsImages.todoList,
    techs: [skillsImages.html5, skillsImages.css3, skillsImages.javascript],
    description: 'Nesse projeto foi necessário manipular o DOM para adicionar (ou remover) itens à lista de tarefas, utilizar eventos para identificar quando o usuário está interagindo com a página e criar funções para tratar esses eventos de forma apropriada.',
  },
  {
    id: 3,
    name: 'Facebook Signup',
    link: 'https://github.com/victorfariass/login-signup',
    deploy: 'https://victorfariass.github.io/login-signup/',
    image: projectsImages.facebookSignup,
    techs: [skillsImages.html5, skillsImages.css3, skillsImages.javascript],
    description: 'Foi implementado um formulário em HTML, utilizando também bibliotecas que deixou o trabalho mais rápido, fácil e bonito. Além disso, foi estilizado usando muito CSS Flexbox, que é uma maneira fácil e limpa de organizar os elementos da tela.'
  },
  {
    id: 4,
    name: 'Shopping Cart',
    link: 'https://github.com/victorfariass/shopping-cart',
    deploy: 'https://victorfariass.github.io/shopping-cart/',
    image: projectsImages.shoppingCart,
    techs: [skillsImages.html5, skillsImages.css3, skillsImages.javascript],
    description: 'Este projeto coloca em prática todo o conteúdo sobre Web Storage e assincronicidade em JavaScript.',
  },
  {
    id: 5,
    name: 'Movie Cards Library',
    link: 'https://github.com/victorfariass/movie-cards-library',
    deploy: 'https://victorfariass.github.io/movie-cards-library/',
    image: projectsImages.mcLibrary,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.css3],
    description: 'Foi desenvolvido uma biblioteca de cartões contendo informações sobre filmes. Foi ultilizado o React e alguns conceitos básicos: componentes, props e composição de componentes.',
  },
  {
    id: 6,
    name: 'Movie Cards Library Stateful',
    link: 'https://github.com/victorfariass/movie-cards-library-statefull',
    deploy: 'https://victorfariass.github.io/movie-cards-library-statefull/',
    image: projectsImages.mcLibraryStateful,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.css3],
    description: 'Esse projeto é igual ao anterior, porém usa a funcionalidade de estados de componentes em React.',
  },
  {
    id: 7,
    name: 'Movie Cards Library CRUD',
    link: 'https://github.com/victorfariass/movie-cards-library-crud',
    deploy: 'https://victorfariass.github.io/movie-cards-library-crud',
    image: projectsImages.mcLibraryCrud,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.css3],
    description: 'Esse projeto é igual aos anteriores, porém utiliza a biblioteca React Router para organizar a aplicação em rotas e fornecer formas de navegar entre elas.',
  },
  {
    id: 8,
    name: 'Frontend Online Store',
    link: 'https://github.com/victorfariass/project-frontend-online-store',
    deploy: 'https://victorfariass.github.io/project-frontend-online-store/',
    image: projectsImages.onlineStore,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.css3],
    description: 'Primeiro projeto feito em grupo, utilizando todos os conceitos aprendidos em React e as Metodologias Ágeis.',
  },
  {
    id: 9,
    name: 'React Testing Library',
    link: 'https://github.com/victorfariass/pokedex',
    deploy: 'https://victorfariass.github.io/pokedex',
    image: projectsImages.testingLibrary,
    techs: [skillsImages.javascript, skillsImages.react],
    description: 'Neste projeto foi escrito testes para uma aplicação em React.',
  },
  {
    id: 10,
    name: 'Trybe Wallet',
    link: 'https://github.com/victorfariass/wallet',
    deploy: 'https://victorfariass.github.io/wallet/',
    image: projectsImages.trybeWallet,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.redux, skillsImages.css3],
    description: 'Neste projeto foi desenvolvido uma carteira de controle de gastos com conversor de moedas, utilizando Redux para o compartilhamento de estado entre os componentes.',
  },
  {
    id: 11,
    name: 'Jogo de Trivia',
    link: 'https://github.com/victorfariass/game-quest',
    deploy: 'https://victorfariass.github.io/game-quest/',
    image: projectsImages.jogoTrivia,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.redux, skillsImages.css3],
    description: 'Foi desenvolvido um jogo de perguntas e respostas baseado no jogo Trivia utilizando React e Redux, desenvolvendo em grupo suas funcionalidades de acordo com as demanas definidas em um quadro Kanban.',
  },
  {
    id:12,
    name: 'StarWars Planets Search',
    link: 'https://github.com/victorfariass/starwars-planets-search',
    deploy: 'https://victorfariass.github.io/starwars-planets-search/',
    image: projectsImages.starWars,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.css3],
    description: 'Foi desenvolvido uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.',
  },
  {
    id: 13,
    name: 'App de Receitas',
    link: 'https://github.com/victorfariass/recipes',
    deploy: 'https://victorfariass.github.io/recipes/',
    image: projectsImages.recipesApp,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.css3],
    description: 'Foi desenvolvido um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API! Nela é possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!',
  },
  {
    id: 14,
    name: 'App de Delivery',
    link: 'https://github.com/victorfariass/project-delivery-app',
    image: projectsImages.deliveryApp,
    techs: [skillsImages.javascript, skillsImages.react, skillsImages.redux, skillsImages.styledcomponents, skillsImages.nodedotjs, skillsImages.mysql],
    description: 'Neste projeto foi criado e integrado, tanto o back-end quanto o front-end, uma plataforma de delivery de cerveja.',
  },
]

export const skillsLogo = [
  {name: 'Git', url: skillsImages.git},
  {name: 'GitHub', url: skillsImages.github},
  {name: 'HTML', url: skillsImages.html5},
  {name: 'CSS', url: skillsImages.css3},
  {name: 'Sass', url: skillsImages.sass},
  {name: 'JavaScript', url: skillsImages.javascript},
  {name: 'TypeScript', url: skillsImages.typescript},
  {name: 'ReactJs', url: skillsImages.react},
  {name: 'Redux', url: skillsImages.redux},
  {name: 'Styled Components', url: skillsImages.styledcomponents},
  {name: 'NodeJs', url: skillsImages.nodedotjs},
  {name: 'MySQL', url: skillsImages.mysql},
  {name: 'MongoDB', url: skillsImages.mongodb},
  {name: 'Heroku', url: skillsImages.heroku},
]