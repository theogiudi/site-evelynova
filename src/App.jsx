import { Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Stats from './components/Stats'
import Services from './components/Services'
import Confidentiality from './components/Confidentiality'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import Portfolio from './pages/Portfolio'

function Home() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Stats />
        <Services />
        <Confidentiality />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/realisations" element={<Portfolio />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
    </Routes>
  )
}
