import { useState } from 'react'
import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='border-row'>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    </div>
    
    <div className='border-row'>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    </div>

    <div className='border-row'>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    </div>
    </>
  )
}

export default App
