import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import InputTest from './pages/InputTest'
import CheckBoxTest from './pages/CheckBoxTest'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/input-test" element={<InputTest />} />
          <Route path="/check-box-test" element={<CheckBoxTest />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
