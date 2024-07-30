import { createBrowserRouter } from 'react-router-dom'

import { App } from './app'
import { AppLayout } from './pages/_layouts/app'
import { Questions } from './pages/quizz/questions'
import { Result } from './pages/quizz/result'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/quizz', element: <Questions /> },
      { path: '/result', element: <Result /> },
    ],
  },
])
