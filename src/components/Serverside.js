// "use server";

// import { GoogleSpreadsheet } from "google-spreadsheet";
// // import creds from '../../client_secret.json'
// import { JWT } from 'google-auth-library';

// import Selecter from "./Selecter";

// const SCOPES = [
//   'https://www.googleapis.com/auth/spreadsheets',
//   'https://www.googleapis.com/auth/drive.file',
// ];

// // const serviceAccountAuth = new JWT({
// //   email: creds.client_email,
// //   key: creds.private_key,
// //   scopes: SCOPES,
// // });
// const serviceAccountAuth = new JWT({
//   email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
//   key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, "\n"),
//   scopes: SCOPES,
// });


// async function fetchData(id) {
// 	const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws', serviceAccountAuth);
	
// 	// const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws');
// 	// doc.useServiceAccountAuth(creds);
// 	await doc.loadInfo();
// 	const sheet = doc.sheetsByIndex[id];
// 	const rows = await sheet.getRows()
// 	let rowList=rows.map(v=>v._rawData)
// 	rowList=[...rowList.sort((a,b)=>Number(b[4])-Number(a[4]))]
// 	return rowList
// 	console.log(rows[0].get('名前'))
// 	// console.log(rows)
// 	// for (let i = 0; i < 1000; i++) {
// 	// 	console.log(i,rows[0].get('名前'))
// 	// }
// }
// async function fetchVideo() {
// 	const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws', serviceAccountAuth);
	
// 	// const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws');
// 	// doc.useServiceAccountAuth(creds);
// 	await doc.loadInfo();
// 	const sheet = doc.sheetsByIndex[3];
// 	const rows = await sheet.getRows()
// 	let rowList=rows.map(v=>v._rawData)

// 	rowList=[...rowList.sort((a,b)=>Number(b[5])-Number(a[5]))]
// 	return rowList
// 	console.log(rows[0].get('名前'))
// 	// console.log(rows)
// 	// for (let i = 0; i < 1000; i++) {
// 	// 	console.log(i,rows[0].get('名前'))
// 	// }
// }

// export async function Serverside(){
// 	let dataList = await Promise.all([0, 1, 2].map(async (index) => await fetchData(index)));
// 	let videoList=await fetchVideo()
// 	const data={
// 		channelList:dataList,
// 		videoList:videoList
// 	}
// 	return (
// 		<Selecter data={data}/>
// 	)
// }