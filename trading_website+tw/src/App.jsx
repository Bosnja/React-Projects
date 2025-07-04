import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Developers from './components/Developers'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <Subscribe />
        <Footer />
        
    </div>
      
    
  )
}

export default App
