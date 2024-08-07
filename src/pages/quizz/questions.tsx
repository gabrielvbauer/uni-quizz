import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { useQuizz } from '@/context/quizz-context'

import { Question } from './question'

export function Questions() {
  const navigate = useNavigate()
  const {
    currentQuestionIndex,
    goToPreviousQuestion,
    goToNextQuestion,
    onSelectOption,
    getCurrentQuestion,
    calculateResult,
    isLastQuestion,
    isCurrentQuestionAnswered,
  } = useQuizz()

  function handleGetCurrentQuestion() {
    const currentQuestion = getCurrentQuestion()
    return currentQuestion
  }

  function finishQuizz() {
    const result = calculateResult()

    navigate('/result', { state: result })
  }

  return (
    <main className="flex flex-col flex-1 px-6 py-7">
      {currentQuestionIndex > 0 && (
        <button
          className="flex gap-2 font-medium"
          onClick={goToPreviousQuestion}
        >
          <ArrowLeft />
          Voltar para pergunta anterior
        </button>
      )}

      <div className="h-full flex flex-1 pt-12 pb-12">
        <Question
          question={handleGetCurrentQuestion()}
          onSelectOption={onSelectOption}
        />
      </div>
      {isLastQuestion ? (
        <button
          className="min-h-16 h-16 flex items-center justify-center bg-accent-warm rounded-md font-semibold text-lg border-2 border-accent-warm disabled:border-white active:opacity-80 disabled:opacity-80 disabled:bg-transparent"
          onClick={finishQuizz}
          disabled={!isCurrentQuestionAnswered}
        >
          Descobrir quem eu sou
        </button>
      ) : (
        <button
          className="min-h-16 h-16 flex items-center justify-center bg-accent-warm rounded-md font-semibold text-lg border-2 border-accent-warm disabled:border-white active:opacity-80 disabled:opacity-80 disabled:bg-transparent"
          onClick={goToNextQuestion}
          disabled={!isCurrentQuestionAnswered}
        >
          Próxima questão
        </button>
      )}
    </main>
  )
}
