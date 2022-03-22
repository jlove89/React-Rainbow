import React, { useState } from 'react'

function ColorForm({ addColor }) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // add color Function
        addColor(input)
        setInput('')
    }

  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter a color..." />
            <button type="submit" onClick={handleSubmit}>Submit!</button>
        </form>
    </div>
  )
}

export default ColorForm