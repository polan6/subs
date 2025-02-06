// "use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';
import Selecter from "../components/Selecter";

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];


const serviceAccountAuth = new JWT({
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});


async function fetchData(doc,index) {
	const sheet = doc.sheetsByIndex[index];
	const rows = await sheet.getRows()
	let rowList=rows.map(v=>v._rawData)
	rowList=[...rowList.sort((a,b)=>Number(b[4])-Number(a[4]))]
	return rowList
	console.log(rows[0].get('名前'))
	// console.log(rows)
	// for (let i = 0; i < 1000; i++) {
	// 	console.log(i,rows[0].get('名前'))
	// }
}
async function fetchVideo(doc,index) {
	const sheet = doc.sheetsByIndex[3+index];
	const rows = await sheet.getRows()
	let rowList=rows.map(v=>v._rawData)

	//rowList=[...rowList.sort((a,b)=>Number(b[5])-Number(a[5]))]
	return rowList
	console.log(rows[0].get('名前'))
	// console.log(rows)
	// for (let i = 0; i < 1000; i++) {
	// 	console.log(i,rows[0].get('名前'))
	// }
}
async function fetchSheet(){
	const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws', serviceAccountAuth);
	await doc.loadInfo();
	let dataList = await Promise.all([0, 1, 2].map(async (index) => await fetchData(doc,index)));
	//videolist
	const videoListIndex=[]
	for (let i = 0; i < 24; i++) {
		videoListIndex.push(i)
	}
	const videoListArray=await Promise.all(videoListIndex.map(async (index) => await fetchVideo(doc,index)));
	let videoList=[]
	for (let i = 0; i < 24; i++) {
		videoList=[...videoList,...videoListArray[i]]
	}
	videoList=[...videoList.sort((a,b)=>Number(b[5])-Number(a[5]))]
	
	const data={
		channelList:dataList,
		videoList:videoList
	}
	return data
}

// import { headers } from 'next/headers';

export default async function Home(){
	// const headersData = headers();
	// const protocol = headersData.get('x-forwarded-proto') || 'http';
	// const host = headersData.get('host');
	// const apiBase = `${protocol}://${host}`;
	// const ENDPOINT = `${apiBase}/api/dara`;


	// const data = await fetch(ENDPOINT).then((res) => res.json());
	const data=await fetchSheet()

	return (
		<Selecter data={data}/>
	)
	// return (
	// 	<div className="counter__content">
	// 		<ChannelList dataList={dataList[0]} title={"メインチャンネル"}></ChannelList>
	// 		<ChannelList dataList={dataList[1]} title={"グループチャンネル"}></ChannelList>
	// 		{/* <ChannelList dataList={dataList[2]} title={"個人チャンネル"}></ChannelList> */}

	// 	</div>
	// )
}

export const dynamic = 'force-dynamic'


// "use server";
// import Image from "next/image";
// import styles from "./page.module.css";
// // import Header from "@/components/Header";
// // import { TableList } from "@/components/TableList";
// import { Index } from "@/pages/Index";
// export default async function Home() {
// 	return (
// 		<Index/>
// 	)
// }