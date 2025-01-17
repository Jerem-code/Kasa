import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import About from './pages/About/about.jsx'
//import Error404 from './pages/Error404/error404.jsx'
import ErrorComponent from "./components/Error/error.jsx"
import Accommodation from './pages/Accommodation/Accommodation.jsx'
import '@fortawesome/fontawesome-svg-core/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </StrictMode>,
)
