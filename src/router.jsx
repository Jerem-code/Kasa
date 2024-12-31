import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/header.jsx'
import Footer from './components/Header/footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)

