"use client"

import { createContext, useState } from 'react'

export const Context = createContext();

const ContextProvider = (props) => {

    const [navUpdater,setNavUpdater]=useState(false)
  
    return (
        <Context.Provider value={{
           navUpdater,setNavUpdater
        }}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider