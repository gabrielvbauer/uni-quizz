import { useNavigate } from 'react-router-dom'

import bunnyImg from '@/assets/bunny.png'
import glitterImg from '@/assets/glitter.png'
import journalismLogo from '@/assets/journalism.png'
import quizzLogo from '@/assets/logo.png'
import stripesImg from '@/assets/stripes.png'

export function App() {
  const navigate = useNavigate()

  return (
    <>
      <main className="px-6 py-7 flex flex-1 flex-col justify-center items-center gap-20 relative overflow-hidden">
        <img src={quizzLogo} alt="Quizz Logo" />
        <p className="text-center font-bold text-2xl w-80 text-neutral-dark font-asap">
          Descubra o seu arquétipo pessoal de acordo com os personagens de Alice
          no País das Maravilhas
        </p>
        <button
          className="
            h-16
            px-14
            flex
            items-center
            justify-center
            bg-accent-warm
            rounded-2xl
            font-bold
            font-asap
            text-4xl
            text-neutral-dark
            active:opacity-80
          "
          onClick={() => navigate('/quizz')}
        >
          COMEÇAR
        </button>
        <img src={journalismLogo} alt="Logo Jornalismo" width={200} />
        <img
          src={bunnyImg}
          alt="coelho"
          width={64}
          className="absolute right-[-30px] bottom-7"
        />
      </main>
      <img
        src={stripesImg}
        alt="stripes"
        className="absolute z-[0] w-full h-full"
      />
      <img
        src={glitterImg}
        alt="stripes"
        className="absolute z-[0] w-full h-full"
      />
    </>
  )
}
