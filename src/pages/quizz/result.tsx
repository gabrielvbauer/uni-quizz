import { useLocation, useNavigate } from 'react-router-dom'

import { useQuizz } from '@/context/quizz-context'
import type { QuizzResult } from '@/quizz'

export function Result() {
  const result: QuizzResult = useLocation().state
  const navigate = useNavigate()

  const { reset } = useQuizz()

  function goToStart() {
    reset()
    navigate('/')
  }

  return (
    <main className="flex flex-col flex-1 py-12">
      <div className="flex flex-col items-center gap-4 flex-1">
        <h2 className="font-bold text-4xl">{result.character}</h2>
        <p className="font-semibold text-2xl">
          Arquétipo do {result.archetype}
        </p>
      </div>

      <button
        className="w-full h-16 flex items-center justify-center bg-accent-warm rounded-md font-semibold text-lg border-2 border-accent-warm disabled:border-white active:opacity-80 disabled:opacity-80 disabled:bg-transparent"
        onClick={goToStart}
      >
        Voltar para o início
      </button>
    </main>
  )
}
