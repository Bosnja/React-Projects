import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Login3 from './components/Login3'
import Login2 from './components/Login2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
      <Login2 />
      <Login3 />
    </div>
    
    
  )
}

export default App
