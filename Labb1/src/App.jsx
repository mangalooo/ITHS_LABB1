import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TestBootstrap from './components/TestBootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <TestBootstrap />

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
