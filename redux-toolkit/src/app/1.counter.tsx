import React from 'react'
import { useGetTodosQuery, useGetUsersQuery } from './api'

const App = () => {
  const {data} = useGetUsersQuery();
  const {data: todos} = useGetTodosQuery();
  return (
   <div>
      <h2 className='text-blue-500 text-6xl'>Users</h2>
      <li>{data?.map((user)=> <li>{user.name}</li>)}</li>
      <h2 className='text-blue-500 text-6xl'>Todos</h2>
      <li>{todos?.map((todo)=> <li>{todo.title}</li>)}</li>
   </div>
    
  )
}

export default App
