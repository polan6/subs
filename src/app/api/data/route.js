import { NextResponse } from 'next/server';

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];


const serviceAccountAuth = new JWT({
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});


async function fetchData(doc,id) {
	const sheet = doc.sheetsByIndex[id];
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
async function fetchVideo(doc) {
	const sheet = doc.sheetsByIndex[3];
	const rows = await sheet.getRows()
	let rowList=rows.map(v=>v._rawData)

	rowList=[...rowList.sort((a,b)=>Number(b[5])-Number(a[5]))]
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
	let videoList=await fetchVideo(doc)
	const data={
		channelList:dataList,
		videoList:videoList
	}
	return data
}



export async function GET() {
  const data = await fetchSheet()
  return NextResponse.json(data)
}