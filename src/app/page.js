'use client'

import { useEffect, useState } from "react";
import Selecter from "../components/Selecter";

import { createContext,useContext } from "react";
export const IsLoadedContext=createContext(false)

export default function Home(){
	const [data,setData]=useState({
		channelList:[],
		videoList:[],
		isLoaded:false
	})
	const [isLoaded,setIsLoaded]=useState(false)
	useEffect(()=>{
		async function fetchData(){
			const res=await fetch('/api/data/')
			const dataJSON=await res.json()
			console.log(dataJSON.data)
			setData(dataJSON.data)
			setIsLoaded(true)
		}
		fetchData()
		
	},[])

	return (
		<IsLoadedContext.Provider value={isLoaded}>
			<Selecter data={data}/>
		</IsLoadedContext.Provider>
	)
}

export const dynamic = 'force-dynamic'

