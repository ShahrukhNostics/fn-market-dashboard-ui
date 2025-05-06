import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import InputTest from './pages/InputTest'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/input-test" element={<InputTest />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
