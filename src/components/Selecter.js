"use client";

import React, { useState } from 'react'
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import Stats from './Stats';
import Videos from './Videos';
// サーバーサイドからルーターにデータを渡す
const Selecter = ({data}) => {
	const [page,setPage]=useState(0)
	if(page==0){
		return (
			<>
				<Header/>
				<Stats channelList={data.channelList}/>
				<Footer page={page} setPage={setPage}/>
			</>
		)
	}else{
		return (
			<>
				<Header/>
				<Videos videoList={data.videoList}/>
				<Footer page={page} setPage={setPage}/>
			</>
		)
	}
}

export default Selecter