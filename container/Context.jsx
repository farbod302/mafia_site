"use client"

import { createContext, useState } from 'react'

export const Context = createContext();

const ContextProvider = (props) => {

    const [navUpdater,setNavUpdater]=useState(false)
    const [item,setItem]=useState(null)
  
    return (
        <Context.Provider value={{
           navUpdater,setNavUpdater,
           item,setItem
        }}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider