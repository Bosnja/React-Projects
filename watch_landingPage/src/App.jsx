import { useEffect, useRef, useState } from "react"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Story from './components/Story'
import Contact from './components/Contact'

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const secondRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavbar(entry.isIntersecting),
      { threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
       }
    );

    if (secondRef.current) observer.observe(secondRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar visible={showNavbar} />
      <Hero />
      <div ref={secondRef} className="min-h-screen bg-gray-100">
      <Cards />
      <Story />
      <Contact />
      </div>
      
    </div>
  )
}

export default App
