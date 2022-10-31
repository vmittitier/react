import React from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'


// use context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const Home = () => {
  const {contextValue} = useContext(SomeContext);
  return (
    <div>
      <HookUseState />
      <HookUseReducer/>
      <HookUseEffect/>
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
    </div>
  )
}

export default Home