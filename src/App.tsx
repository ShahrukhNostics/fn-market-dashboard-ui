import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import InputTest from './pages/InputTest'
import CheckBoxTest from './pages/CheckBoxTest'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/input-test" element={<InputTest />} />
          <Route path="/check-box-test" element={<CheckBoxTest />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
