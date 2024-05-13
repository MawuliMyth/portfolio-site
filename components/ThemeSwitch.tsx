"use client"

import { useEffect, useState } from "react"
import { BsMoonStars, BsSun } from "react-icons/bs"

type Theme='light'|'dark'

const ThemeSwitch=()=>{
    const [activeTheme, setActiveTheme] = useState<Theme>('light')
    const [re,setRe]=useState(0)
    const toggleTheme=()=>{
        setActiveTheme(prevTheme=>{
            const newTheme=prevTheme==='light'?'dark':'light'
            localStorage.setItem('theme',newTheme)
            return newTheme
        })
    }

    useEffect( ()=>{
        const lastUsedTheme=localStorage.getItem('theme') as Theme|null
        console.log("lastUsedTheme: ",lastUsedTheme)
        if (lastUsedTheme)
        setActiveTheme(lastUsedTheme)
    else if (window.matchMedia('(prefers-color-sceme: dark)').matches)
            setActiveTheme('dark')
    },[])

    useEffect(()=>{
        if (activeTheme==='dark')
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')

        console.log("DARKMODE___WOOOT", document.documentElement.classList)
        setRe((re)=>re+1)
    },[activeTheme])

    return(
        <button onClick={toggleTheme}
        className="fixed bottom-5 right-5 w-10 h-10 backdrop-blur-sm border shadow-md rounded-full flex justify-center items-center hover:shadow-lg hover:scale-110 active:scale-95 transition hover:bg-black/10"
    >
            {activeTheme==='dark'?
                <BsMoonStars/>
                :
                <BsSun/> 
            }
        </button>
    )
}
export default ThemeSwitch