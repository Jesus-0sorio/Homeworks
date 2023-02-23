import React from 'react'
import {useFetch} from '../hooks/useFetch'  
import {useCounter} from '../hooks/useCounter'

export const BreakingBad = () => {
  const {counter, increment, decrement} = useCounter(1)
  const { data, isLoading} = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  return (
    <>
    <div>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
    {isLoading === true ? <span>Loading...</span> : <blockquote>{data[0].quote}</blockquote>}
    </>
  )
}
