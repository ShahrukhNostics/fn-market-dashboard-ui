import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
