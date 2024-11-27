import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addvalue= () => {
    if(counter<20){
    setCounter(counter+1)
  }
  }
  const removevalue= () => {
    if(counter>0){
    setCounter(counter-1)
  }
  }

  return (
    <>
    <h1>Hello React!</h1>
      <h1>Counter Number : {counter}</h1>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button></>
  )
}

export default App
