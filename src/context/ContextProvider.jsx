import React, { createContext, useState } from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {

  const [datas, setDatas] = useState('');
  const [favProfile, setFavProfile] = useState('');

  const data = {
    datas,
    setDatas,
    favProfile,
    setFavProfile
  }

  return (
    <Context.Provider value={data} >{children}</Context.Provider>
  )
}

export {ContextProvider, Context}