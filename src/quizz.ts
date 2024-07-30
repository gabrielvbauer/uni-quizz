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
        enunciate: 'Qual é a sua atividade favorita durante o chá da tarde?',
        options: [
          {
            id: 'O-1',
            option: 'Conversar sobre coisas estranhas',
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
            option: 'Observar o ambiente ao redor',
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
            option: 'Inventar novas regras para jogos',
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
            option: 'Rir de piadas sem sentido',
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
            option: 'Ficar invisível e surpreender os outros',
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
        enunciate: 'Qual é a sua reação ao encontrar algo inesperado?',
        options: [
          {
            id: 'O-6',
            option: 'Explorar imediatamente',
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
            option: 'Fazer perguntas confusas',
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
            option: 'Rir e se divertir com a situação',
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
            option: 'Observar calmamente de longe',
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
            option: 'Ordenar que todos se acalmem',
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
