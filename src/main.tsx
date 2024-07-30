import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { App } from './app'
import { QuizzContextProvider } from './context/quizz-context'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizzContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QuizzContextProvider>
  </React.StrictMode>,
)
