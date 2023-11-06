import React, {useState} from 'react'

const UseState = () => {

  const[ name, setName] = useState("")

  function handleClick(){
    setName("John")
  }

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseState