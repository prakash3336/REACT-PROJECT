import React, { createContext, useContext ,useState} from 'react'
import Child from './child';
const Parent = () => {
    const [username, setUsername] = useState('rooban_1')
    const [password, setPassword] = useState('admin')
    const context = createContext();

  return (
    <context.Provider value={{username,password,setPassword}}>
        <h1>Parent</h1>
        <Child/>
    </context.Provider>
  )
}

export default Parent