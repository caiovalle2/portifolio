export const skils = [
    { img: "/python.png", label: "Python" },
    { img: "/react.png", label: "React" },
    { img: "/django.png", label: "Django" },
    { img: "/Git.png", label: "Git" },
    { img: "/github.png", label: "Github" },
    { img: "/Tailwind.png", label: "Tailwind" },
    { img: "/Linux.png", label: "Linux" },
    { img: "/Postman.png", label: "Postman" },
    { img: "/Java.png", label: "Java" },
    { img: "/Pandas.png", label: "Pandas" },
    { img: "/MongoDB.png", label: "MongoDB" },
    { img: "/C.png", label: "C" },
    { img: "/MySQL.png", label: "MySQL" },
    { img: "/TypeScript.png", label: "TypeScript" },
  ];

export const experiences = [
  {
    role: "Desenvolvedor Júnior",
    company: "Float Health",
    period: "Abr 2025 - Atual",
    description:
      "Atuação no desenvolvimento de aplicações front-end utilizando Next.js, com integração de APIs REST e criação de componentes reutilizáveis e responsivos. Implementação de automações com Python e n8n para integração entre sistemas e otimização de fluxos de dados. Realização de web scraping com bibliotecas como Selenium, BeautifulSoup e Pandas, visando à extração, tratamento e carga de dados em bancos de dados. Aplicação de boas práticas de acessibilidade, versionamento com Git e colaboração em ambiente ágil.",
  },
  {
    role: "Desenvolvedor Back-End - Estagiário",
    company: "inRadar",
    period: "Fev 2022 - Set 2023",
    description:
      "Desenvolvimento e manutenção de APIs RESTful utilizando Django e Tastypie, com foco em escalabilidade e segurança. Implementação de operações CRUD (Create, Read, Update, Delete) para diferentes modelos de dados, garantindo funcionalidade e consistência nos endpoints da aplicação. Criação de testes unitários e de integração com Pytest, aumentando a cobertura e a confiabilidade do sistema. Integração com bancos de dados MySQL e utilização de tarefas assíncronas com Celery. Participação em cerimônias ágeis (Scrum/Kanban), práticas de pair programming e uso de ferramentas como Jira, Bitbucket e Postman para controle de qualidade e gestão de projetos. Configuração de ambientes Linux e versionamento com Git.",
  },
];

export const myProjects = [
  {
    image: '/latitude90.png',
    title: 'Latitude 90º',
    description: 'Projeto de jogo de tabuleiro digital que recria o tradicional Latitude 90º. Desenvolvido em Java com Swing, desafia jogadores a alcançar o polo adversário, com funcionalidades de salvar e carregar partidas.',
    tags: [
      { img: '/java.png', label: 'Java' },
      { img: '', label: 'Swing' },
      { img: '', label: 'POO' },
      { img: '/Git.png', label: 'Git' },
      { img: '/github.png', label: 'Github' },
      { img: '', label: 'manipulacao de arquivos' },
      { img: '', label: 'JUnit' }

    ],
    githubLink: 'https://github.com/caiovalle2/Projeto-Latitude90',
  },
  {
    image: '/mastermind.png',
    title: 'Mastermind',
    description: 'Implementação do jogo Mastermind, um jogo de raciocínio lógico para adivinhar uma senha de cores. Desenvolvido em Python com Tkinter, seguindo o padrão de arquitetura MVC.',
    tags: [
      { img: '/python.png', label: 'Python' },
      { img: '', label: 'Tkinter' },
      { img: '', label: 'MVC' },
      { img: '', label: 'manipulacao de arquivos' },

    ],
    githubLink: 'https://github.com/caiovalle2/MasterMind',
  },
  {
    image: '/todolist.png',
    title: 'Todo List App',
    description: 'Aplicativo Full Stack de lista de tarefas com autenticação de usuários por sessão. Backend em Django Rest Framework e frontend em Next.js. Permite gerenciamento de tarefas com quadro de arrastar e soltar.',
    tags: [
      { img: '/react.png', label: 'React.js' },
      { img: '/django.png', label: 'Django' },
      { img: '/MySql.png', label: 'PostgreSQL' },
      { img: '', label: 'Next.js' },
      { img: '', label: 'Django Rest Framework' },
      { img: '/Git.png', label: 'Git' },
      { img: '/github.png', label: 'Github' },
      { img: '/Tailwind.png', label: 'Tailwind CSS' },
      { img: '', label: 'Autenticação de usuários' },
      { img: '', label: 'CRUD' },
      { img: '', label: 'Drag and Drop' }
    ],
    githubLink: 'https://github.com/caiovalle2/task-management-fullstack',
  },
  {
    image: '/algoritmo-busca.png',
    title: 'Busca A*',
    description: 'Trabalho de Inteligência Artificial focado no algoritmo A* para encontrar a rota de menor custo e um algoritmo genético para otimizar combinações de jogadores em percursos.',
    tags: [
      { img: '/python.png', label: 'Python' },
      { img: '', label: 'Inteligência Artificial' },
      { img: '', label: 'Algoritmo A*' },
      { img: '', label: 'Algoritmo Genético' },
      { img: '', label: 'Otimização' }
    ],
    githubLink: 'https://github.com/caiovalle2/INF1771-Trabalho1',
  },
  {
    image: '',
    title: 'Desafio dos drones',
    description: 'Um projeto de automação de bot que usa máquinas de estado para gerenciar comportamentos dinâmicos (como desviar de obstáculos, caçar tesouros e atacar) e o algoritmo de busca heurística A* para otimizar a exploração do mapa e maximizar a pontuação.',
    tags: [
      { img: '/python.png', label: 'Python' },
      { img: '', label: 'Inteligência Artificial' },
      { img: '', label: 'Algoritmo A*' },
      { img: '', label: 'Máquinas de Estado' },
      { img: '', label: 'Automação' }
    ],
    githubLink: 'https://github.com/caiovalle2/INF1771-Trabalho4',
  },
  {
    image: '/servidor.png',
    title: 'Servidor em C',
    description: 'Servidor concorrente em C capaz de atender múltiplos clientes simultaneamente via threads. Permite execução em background e configuração via linha de comando, incluindo porta, logs e diretório raiz.',
    tags: [
      { img: '/c.png', label: 'C' },
      { img: '', label: 'Threads' },
      { img: '', label: 'Sockets' },
      { img: '', label: 'Concorrência' },
      
      
    ],
    githubLink: 'https://github.com/caiovalle2/INF-1370',
  },
]
