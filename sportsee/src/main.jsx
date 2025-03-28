import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Dashboard from './pages/Dashboard/'

import Header from './components/Header/'

import './styles/index.scss'

const container = document.getElementById('root')

const root = ReactDom.createRoot(container)

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)
