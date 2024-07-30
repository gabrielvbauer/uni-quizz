import type { Question } from '@/quizz'

interface QuestionProps {
  question: Question
  onSelectOption: (id: string) => void
}

export function Question({ question, onSelectOption }: QuestionProps) {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-16">{question.enunciate}</h2>

      <div className="flex flex-col gap-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`w-full px-4 py-5 border-2 rounded-md text-md font-semibold ${option.selected && 'bg-accent-warm border-accent-warm'}`}
            onClick={() => onSelectOption(option.id)}
          >
            <p>{option.option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
