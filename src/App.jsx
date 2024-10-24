import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <PortfolioPage />
    </div>
  )
}

export default App;
