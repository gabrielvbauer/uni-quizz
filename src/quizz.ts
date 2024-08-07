type OptionWeights = {
  archetype: string
  weight: number
}

type Option = {
  id: string
  option: string
  selected: boolean
  weights: OptionWeights[]
}

export type Question = {
  id: string
  enunciate: string
  options: Option[]
}

type Quizz = { questions: Question[] }

export const charactersWithArchetypes = [
  {
    character: 'Alice',
    archetypes: ['Explorador', 'Herói'],
  },
  {
    character: 'Chapeleiro',
    archetypes: ['Criador', 'Bobo da Corte'],
  },
  {
    character: 'Rainha Vermelha',
    archetypes: ['Governante', 'Rebelde'],
  },
  {
    character: 'Rainha Branca',
    archetypes: ['Cuidador', 'Amante'],
  },
  {
    character: 'Gato de Chesire',
    archetypes: ['Mago', 'Sábio'],
  },
  {
    character: 'Coelho Branco',
    archetypes: ['Cara Comum', 'Inocente'],
  },
]

export type QuizzResult = {
  character: string
  archetype: string
  value: number
}

export function createQuizzData(): Quizz {
  return {
    questions: [
      {
        id: 'Q-1',
        enunciate: 'Qual desses lemas te inspira?',
        options: [
          {
            id: 'O-1',
            option: 'Acredite no melhor',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 35 },
              { archetype: 'Sábio', weight: 25 },
              { archetype: 'Explorador', weight: 15 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
            ],
          },
          {
            id: 'O-2',
            option: 'Explore o desconhecido',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 30 },
              { archetype: 'Sábio', weight: 30 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Cuidador', weight: 10 },
              { archetype: 'Inocente', weight: 10 },
            ],
          },
          {
            id: 'O-3',
            option: 'Conhecimento é poder',
            selected: false,
            weights: [
              { archetype: 'Criador', weight: 40 },
              { archetype: 'Governante', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Rebelde', weight: 15 },
              { archetype: 'Bobo da Corte', weight: 10 },
            ],
          },
          {
            id: 'O-4',
            option: 'Seja forte e valente',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 50 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 10 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-5',
            option: 'A vida é uma grande aventura',
            selected: false,
            weights: [
              { archetype: 'Mago', weight: 45 },
              { archetype: 'Explorador', weight: 20 },
              { archetype: 'Rebelde', weight: 15 },
              { archetype: 'Sábio', weight: 10 },
              { archetype: 'Bobo da Corte', weight: 10 },
            ],
          },
          {
            id: 'O-6',
            option: 'Cuide dos outros com amor',
            selected: false,
            weights: [
              { archetype: 'Mago', weight: 45 },
              { archetype: 'Explorador', weight: 20 },
              { archetype: 'Rebelde', weight: 15 },
              { archetype: 'Sábio', weight: 10 },
              { archetype: 'Bobo da Corte', weight: 10 },
            ],
          },
        ],
      },
      {
        id: 'Q-2',
        enunciate: 'De que forma você encara novos desafios?',
        options: [
          {
            id: 'O-6',
            option: 'Com otimismo e uma mente aberta',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 50 },
              { archetype: 'Rebelde', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Mago', weight: 5 },
            ],
          },
          {
            id: 'O-7',
            option: 'Com uma vontade de explorar novas possibilidades',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 40 },
              { archetype: 'Inocente', weight: 20 },
              { archetype: 'Bobo da Corte', weight: 20 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-8',
            option: 'Com lógica e busca de conhecimento',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 45 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-9',
            option: 'Com coragem e determinação',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 50 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Governante', weight: 10 },
              { archetype: 'Explorador', weight: 5 },
            ],
          },
          {
            id: 'O-10',
            option: 'Desafiando as normas e buscando mudanças',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
          {
            id: 'O-11',
            option: 'Com empatia e cuidado pelos outros',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
        ],
      },
      {
        id: 'Q-3',
        enunciate: 'Qual é a sua atividade favorita durante o chá da tarde?',
        options: [
          {
            id: 'O-12',
            option: 'Conversar com os amigos',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 50 },
              { archetype: 'Rebelde', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Mago', weight: 5 },
            ],
          },
          {
            id: 'O-13',
            option: 'Planejar novas aventuras',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 40 },
              { archetype: 'Inocente', weight: 20 },
              { archetype: 'Bobo da Corte', weight: 20 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-14',
            option: 'Resolver enigmas e quebra-cabeças',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 45 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-15',
            option: 'Debater questões importantes',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 50 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Governante', weight: 10 },
              { archetype: 'Explorador', weight: 5 },
            ],
          },
          {
            id: 'O-16',
            option: 'Criar histórias e jogos divertidos',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
          {
            id: 'O-17',
            option: 'Ouvir e cuidar dos outros',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
        ],
      },
      {
        id: 'Q-4',
        enunciate: 'O que você prefere fazer em seu tempo livre?',
        options: [
          {
            id: 'O-18',
            option: 'Estudar',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 50 },
              { archetype: 'Rebelde', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Mago', weight: 5 },
            ],
          },
          {
            id: 'O-19',
            option: 'Ler um bom livro',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 40 },
              { archetype: 'Inocente', weight: 20 },
              { archetype: 'Bobo da Corte', weight: 20 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-20',
            option: 'Dormir',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 45 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-21',
            option: 'Apreciar um bom filme',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 50 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Governante', weight: 10 },
              { archetype: 'Explorador', weight: 5 },
            ],
          },
          {
            id: 'O-22',
            option: 'Explorar a natureza',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
          {
            id: 'O-23',
            option: 'Passar tempo com amigos e família',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
        ],
      },
      {
        id: 'Q-5',
        enunciate:
          'Você aprecia a arte de se comunicar, seja por meio da escrita ou fala?',
        options: [
          {
            id: 'O-24',
            option: 'Sim, adoro contar histórias',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 50 },
              { archetype: 'Rebelde', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Mago', weight: 5 },
            ],
          },
          {
            id: 'O-25',
            option: 'Sim, gosto de compartilhar conhecimento',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 40 },
              { archetype: 'Inocente', weight: 20 },
              { archetype: 'Bobo da Corte', weight: 20 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-26',
            option: 'Sim, gosto de inspirar e liderar',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 45 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-27',
            option: 'Sim, gosto de criar e inovar',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 50 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Governante', weight: 10 },
              { archetype: 'Explorador', weight: 5 },
            ],
          },
          {
            id: 'O-28',
            option: 'Sim, gosto de ensinar e orientar',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
          {
            id: 'O-29',
            option: 'Não, prefiro ouvir e aprender',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
        ],
      },
      {
        id: 'Q-6',
        enunciate: 'Você é criativo ou se interessa por essa habilidade?',
        options: [
          {
            id: 'O-30',
            option: 'Sim, adoro criar novas coisas',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 50 },
              { archetype: 'Rebelde', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Mago', weight: 5 },
            ],
          },
          {
            id: 'O-31',
            option: 'Sim, gosto de encontrar soluções criativas',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 40 },
              { archetype: 'Inocente', weight: 20 },
              { archetype: 'Bobo da Corte', weight: 20 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-32',
            option: 'Sim, gosto de explorar minha criatividade',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 45 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-33',
            option: 'Não muito, mas aprecio a criatividade dos outros',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 50 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Governante', weight: 10 },
              { archetype: 'Explorador', weight: 5 },
            ],
          },
          {
            id: 'O-34',
            option: 'Não, prefiro seguir métodos estabelecidos',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
          {
            id: 'O-35',
            option: 'Sim, uso minha criatividade para ajudar os outros',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
        ],
      },
      {
        id: 'Q-7',
        enunciate:
          'Você se considera uma pessoa curiosa e gosta de entender diferentes temas e tendências?',
        options: [
          {
            id: 'O-36',
            option: 'Sim, sou muito curioso(a)',
            selected: false,
            weights: [
              { archetype: 'Explorador', weight: 50 },
              { archetype: 'Rebelde', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Mago', weight: 5 },
            ],
          },
          {
            id: 'O-37',
            option: 'Sim, adoro explorar novos conhecimentos',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 40 },
              { archetype: 'Inocente', weight: 20 },
              { archetype: 'Bobo da Corte', weight: 20 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-38',
            option: 'Sim, estou sempre em busca de aventuras',
            selected: false,
            weights: [
              { archetype: 'Bobo da Corte', weight: 45 },
              { archetype: 'Cara Comum', weight: 20 },
              { archetype: 'Amante', weight: 15 },
              { archetype: 'Inocente', weight: 10 },
              { archetype: 'Explorador', weight: 10 },
            ],
          },
          {
            id: 'O-39',
            option: 'Não muito, prefiro focar em um único tema',
            selected: false,
            weights: [
              { archetype: 'Sábio', weight: 50 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Mago', weight: 15 },
              { archetype: 'Governante', weight: 10 },
              { archetype: 'Explorador', weight: 5 },
            ],
          },
          {
            id: 'O-40',
            option: 'Não, prefiro seguir regras e tradições',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
          {
            id: 'O-41',
            option: 'Sim, gosto de aprender para ajudar os outros',
            selected: false,
            weights: [
              { archetype: 'Governante', weight: 45 },
              { archetype: 'Cuidador', weight: 20 },
              { archetype: 'Herói', weight: 15 },
              { archetype: 'Cara Comum', weight: 10 },
              { archetype: 'Amante', weight: 10 },
            ],
          },
        ],
      },
    ],
  }
}
