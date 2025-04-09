import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/:userId" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  )
}

export default App
