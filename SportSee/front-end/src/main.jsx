import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'

import App from './App'

import './styles/index.scss'

const container = document.getElementById('root')

const root = ReactDom.createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
