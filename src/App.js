import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Header from './components/layout/Header'
import Notfound from './views/Notfound'
import { VIEWS_PATH_PRIVATE } from './config/Navigation_PRIVATE'
import { VIEWS_PATH_PUBLIC } from './config/Navigation_PUBLIC'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      {/* {console.log(window.location.pathname)} */}
      {!VIEWS_PATH_PRIVATE.map((e) => {
        return e.path
      }).includes(window.location.pathname) && <Notfound />}
    </Router>
  )
}

export default App
