import React from 'react'
import { useGetTodosQuery, useGetUserQuery, useGetUsersQuery } from './api'

const App = () => {
  const {data: user} = useGetUserQuery(8);
  const {data} = useGetUsersQuery();
  const {data: todos} = useGetTodosQuery();
  return (
   <div>
      <h1 className='text-blue-500 text-6xl'>User</h1>
      <h4 className='text-green-400'>{user?.name}</h4>
      <h2 className='text-blue-500 text-6xl'>Users</h2>
      <ul>
      <li>{data?.map((user)=> <li>{user.name}</li>)}</li>
      </ul>
      <h1 className='text-blue-500 text-6xl'>Todos</h1>
      <ul>
      <li>{todos?.map((todo)=> <li>{todo.title}</li>)}</li>
      </ul>
   </div>
    
  )
}
export default App;