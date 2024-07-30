import { createContext, type ReactNode, useContext, useState } from 'react'

import {
  charactersWithArchetypes,
  createQuizzData,
  type Question,
  type QuizzResult,
} from '@/quizz'

type QuizzContext = {
  currentQuestionIndex: number
  getCurrentQuestion: () => Question
  goToPreviousQuestion: () => void
  goToNextQuestion: () => void
  onSelectOption: (id: string) => void
  calculateResult: () => QuizzResult
  isLastQuestion: boolean
  isCurrentQuestionAnswered: boolean
  reset: () => void
}

type QuizzContextProviderProps = {
  children: ReactNode
}

export const QuizzContext = createContext({} as QuizzContext)

export function QuizzContextProvider(props: QuizzContextProviderProps) {
  const [questions, setQuestions] = useState(createQuizzData().questions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]
  const isCurrentQuestionAnswered = !!currentQuestion.options.find(
    (option) => option.selected,
  )
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  function getCurrentQuestion(): Question {
    return questions[currentQuestionIndex]
  }

  function selectOption(id: string) {
    const _questions = [...questions]

    const currentQuestion = _questions[currentQuestionIndex]

    currentQuestion.options.forEach((option) => (option.selected = false))

    const optionToSelect = currentQuestion.options.find(
      (option) => option.id === id,
    )

    if (optionToSelect) {
      optionToSelect.selected = true
    }

    setQuestions(_questions)
  }

  function goToNextQuestion() {
    const nextQuestionIndex = currentQuestionIndex + 1

    if (questions[nextQuestionIndex] === undefined) {
      return null
    }

    setCurrentQuestionIndex(nextQuestionIndex)
  }

  function goToPreviousQuestion() {
    const previousQuestionIndex = currentQuestionIndex - 1

    if (questions[previousQuestionIndex] === undefined) {
      return null
    }

    setCurrentQuestionIndex(previousQuestionIndex)
  }

  function calculateResult(): QuizzResult {
    const selectedOptions = questions.flatMap((question) => {
      return question.options.filter((option) => option.selected)
    })

    const quizzArchetypesResult: { archetype: string; value: number }[] = []

    selectedOptions.forEach((selectedOption) =>
      selectedOption.weights.forEach((optionWeight) => {
        const archetypeInResult = quizzArchetypesResult.find(
          (res) => res.archetype === optionWeight.archetype,
        )

        if (!archetypeInResult) {
          quizzArchetypesResult.push({
            archetype: optionWeight.archetype,
            value: optionWeight.weight,
          })

          return
        }

        archetypeInResult.value += optionWeight.weight
      }),
    )

    quizzArchetypesResult.sort((a, b) =>
      a.value > b.value ? -1 : a.value < b.value ? 1 : 0,
    )

    const archetypeWithHighestScore = quizzArchetypesResult[0]

    const character = charactersWithArchetypes.find((characterWithArchetype) =>
      characterWithArchetype.archetypes.includes(
        archetypeWithHighestScore.archetype,
      ),
    )?.character

    if (!character) {
      throw new Error(
        `Personagem não encontrado para o arquétipo ${archetypeWithHighestScore.archetype}`,
      )
    }

    const result: QuizzResult = {
      archetype: archetypeWithHighestScore.archetype,
      value: archetypeWithHighestScore.value,
      character,
    }

    return result
  }

  function reset() {
    setQuestions(createQuizzData().questions)
    setCurrentQuestionIndex(0)
  }

  return (
    <QuizzContext.Provider
      value={{
        currentQuestionIndex,
        goToPreviousQuestion,
        goToNextQuestion,
        onSelectOption: selectOption,
        getCurrentQuestion,
        calculateResult,
        isLastQuestion,
        isCurrentQuestionAnswered,
        reset,
      }}
    >
      {props.children}
    </QuizzContext.Provider>
  )
}

export function useQuizz() {
  return useContext(QuizzContext)
}
