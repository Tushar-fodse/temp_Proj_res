import { useContext, useState } from "react"
// import { ResumeContext } from "../Context/ResumeContext"
import { UplodeFile } from "../components/UplodeFile"
import './Uplodepage.css'
export const UplodePage=()=>{

    return(
        <>
        <h1>
        Upload File
        </h1>
        <UplodeFile/>
        </>
    )
}