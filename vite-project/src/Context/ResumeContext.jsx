import { createContext, useState } from "react"

export const ResumeResultContext=createContext({})

export const ResumeresultProvider=({children})=>{
 const [resume,SetResume]=useState()
 return(
    <ResumeResultContext.Provider value={{resume,SetResume}}>
        {children}
    </ResumeResultContext.Provider>
 )
}