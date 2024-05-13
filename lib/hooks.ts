import { useEffect, useRef } from "react"
import { activeSectionType } from "./types"
import { useActiveSection } from "@/context/ActiveSectionContext"
import { useInView } from "framer-motion"

export const useSectionInView=(section:activeSectionType,margin:number=20)=>{
	const ref = useRef<HTMLElement>(null)
	const {setActiveSection} = useActiveSection()
	const isInView = useInView(ref,{
		margin:`${margin}%`	,
		amount:"all",
	})

	// console.log(section,margin,isInView)
	useEffect(()=>{
		isInView&&setActiveSection(section)
	},[isInView])

	return ref;
}
