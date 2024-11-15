import React, { useContext, useState } from 'react'
import context from './parent'
const Child2 = () => {
  const [newp,setNewp] = useState('')
    const {setPassword} = useContext(context);
  return (
    <>
        <form>
          <label>Change password</label>
          <input type='text' value={newp} onChange={(e)=>{setNewp(e.target.value)}}></input>
          <button onClick={()=>{setPassword(newp)}}>Change</button>
        </form>
    </>
  )
}

export default Child2