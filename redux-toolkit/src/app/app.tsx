import React from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { decrement, increment } from './counterSlice';

const App = () => {
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span className='text-6xl'>{value}</span>
      <div className='flex'>
        <button onClick={()=> dispatch(increment())} className='bg-blue-500 px-4 py-2 rounded text-white'>Arttır</button>
        <button onClick={()=> dispatch(decrement())} className='bg-red-500 px-4 py-2 rounded text-white'>Azalt</button>
      </div>
    </div>
  )
}

export default App