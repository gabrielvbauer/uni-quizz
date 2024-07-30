import { useNavigate } from 'react-router-dom'

export function App() {
  const navigate = useNavigate()

  return (
    <main className="h-screen px-6 py-7 flex flex-col justify-center gap-8 bg-secondary">
      <button
        className="h-16 flex items-center justify-center bg-accent-warm rounded-md font-semibold text-lg active:opacity-80"
        onClick={() => navigate('/quizz')}
      >
        Iniciar meu quizz
      </button>
    </main>
  )
}
