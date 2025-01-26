"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
// import creds from '../../client_secret.json'
import { JWT } from 'google-auth-library';
import './TableList.css'
import ChannelList from "./ChannelList";

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

// const serviceAccountAuth = new JWT({
//   email: creds.client_email,
//   key: creds.private_key,
//   scopes: SCOPES,
// });
const serviceAccountAuth = new JWT({
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});


export async function fetchData(id) {
	const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws', serviceAccountAuth);
	
	// const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws');
	// doc.useServiceAccountAuth(creds);
	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[id];
	const rows = await sheet.getRows()
	let rowList=rows.map(v=>v._rawData)
	rowList=[...rowList.sort((a,b)=>b[4]-a[4])]
	return rowList
	console.log(rows[0].get('名前'))
	// console.log(rows)
	// for (let i = 0; i < 1000; i++) {
	// 	console.log(i,rows[0].get('名前'))
	// }
}
export async function TableList(){
	let dataList = await Promise.all([0, 1, 2].map(async (index) => await fetchData(index)));

	return (
		<div className="counter__content">
			<ChannelList dataList={dataList[0]} title={"メインチャンネル"}></ChannelList>
			<ChannelList dataList={dataList[1]} title={"グループチャンネル"}></ChannelList>
			<ChannelList dataList={dataList[2]} title={"個人チャンネル"}></ChannelList>

		</div>
	)
}