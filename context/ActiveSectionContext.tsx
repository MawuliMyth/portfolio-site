"use client"
import { activeSectionContextProps, activeSectionContextType, activeSectionType } from '@/lib/types';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';


const activeSectionContext = createContext<activeSectionContextType|null>(null);

const ActiveSectionContextProvider = ({children}:activeSectionContextProps) => {
   const [activeSection,setActiveSectionState]=useState<activeSectionType>('Home');
   const [navigating,setNavigating]=useState<activeSectionType|null>(activeSection);
  	

   const funcRef=useRef(null)

  	const navigateTo=(section:activeSectionType)=>{
  		setActiveSectionState(section)
  		setNavigating(section)
  	}
  	const endNavigation=()=>setNavigating(null)

   const setActiveSection=(section:activeSectionType)=>{
  		if(navigating){
  			if(section===navigating){
  				endNavigation()
  			}
  			return;
  		}
  		setActiveSectionState(section);
  	}

  	// disable navigating to after a second
  	useEffect(()=>{
   	const timeout = setTimeout(endNavigation,1000)

   	return ()=>clearTimeout(timeout);
   },[navigating,endNavigation])


   const contextValue:activeSectionContextType={
   	activeSection,setActiveSection,
   	navigateTo,
   }

   return (
   	<activeSectionContext.Provider value={contextValue}>
  	 		{children}
   	</activeSectionContext.Provider>
  )
};

export const useActiveSection=()=>{
	const ctx = useContext(activeSectionContext)
	if(ctx===null)	throw new Error('Active section context cannot be null, must be used within a provider')
	return ctx
}

export default ActiveSectionContextProvider;