import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Vite + React + Tailwind CSS
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-600">
            Button counter: <span className="font-semibold">{count}</span>
          </p>
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
          >
            Increment Count
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
