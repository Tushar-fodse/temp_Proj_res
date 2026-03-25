import { useContext, useState } from "react"
import { ResumeResultContext } from "../Context/ResumeContext"
import { Result } from "./Result"
import './UploadFile.css'


export const UplodeFile=()=>{
    const [file,Setfile]=useState(null)
    const [result,SetResult]=useState(null)
    // const formdata=new FormData()
    const {resume,SetResume}=useContext(ResumeResultContext)
    
    
    const handleLogin=async (e)=>{
        e.preventDefault()
        const formData=new FormData()

        
        try{formData.append("file",file)
        const res = await fetch('https://improved-fortnight-4jw669qj4j6whj5g6-5000.app.github.dev/predict',{
            method:"POST",
            body:formData,
        })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Server error")
      SetResult(data)
      SetResume(data)
    }catch(err){
         console.error("Prediction failed:", err.message)
    }
    }
    return(
        <>
        <form onSubmit={handleLogin}>
            <label htmlFor="uplodefile">Select File</label>
            <input 
            type="file"
            name="uplodefile"
            onChange={(e)=>Setfile(e.target.files[0])}
            />
            <button type="submit">Submit</button>
            <Result/>
        </form>
        </>
    )
}