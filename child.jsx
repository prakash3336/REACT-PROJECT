import React, { useContext } from 'react'
import Child2 from './child2'
import context from './parent'

const Child = () => {
    const {username} = useContext(context)
  return (
    <>
       <h1>{username}</h1>
       <button onClick={<Child2/>} >Change password</button>
    </>
  )
}

export default Child