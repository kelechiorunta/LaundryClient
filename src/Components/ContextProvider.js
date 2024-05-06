import React from 'react'
import { ContextComponent } from './ContextComponent'

const MyContextProvider = ({children, isSignedIn}) => {
    
    return(
        <ContextComponent.Provider value={isSignedIn}>
            {children}
        </ContextComponent.Provider>
    )
}

export default MyContextProvider