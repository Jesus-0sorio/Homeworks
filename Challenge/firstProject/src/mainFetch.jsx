import React, { useState } from 'react'

export const mainFetch = () => {
  const [text, setText] = useState('')
  return (
    <>
    <input type="text" name="" id="" onChange={() => setText(e.target.value)}/>
    <button onClick={}>enviar</button>
    </>
  )
}
