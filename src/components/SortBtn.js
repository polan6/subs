"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from '../../client_secret.json'
import { JWT } from 'google-auth-library';
import './ChannelList.css'
import SortBtn from "./SortBtn";

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const serviceAccountAuth = new JWT({
  email: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  key: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  scopes: SCOPES,
});


export async function fetchData() {
	const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws', serviceAccountAuth);
	
	// const doc = new GoogleSpreadsheet('1TAaXJgYxMZTNC5W0rOap4i50_NOq7JW-BoQh-hqCcws');
	// doc.useServiceAccountAuth(creds);
	await doc.loadInfo();
	console.log(doc.title);
	const sheet = doc.sheetsByIndex[0];
	// console.log(sheet)
	const rows = await sheet.getRows()
	const rowList=rows.map(v=>v._rawData)
	// console.log(rowList)
	return rowList
	console.log(rows[0].get('名前'))
	// console.log(rows)
	// for (let i = 0; i < 1000; i++) {
	// 	console.log(i,rows[0].get('名前'))
	// }
}
export async function ChannelList(){
	let dataList=await fetchData()
	function tableSort(index){
		dataList=dataList.sort((a,b)=>a[index]-b[index])
	}
	return (
		<div className="counter__content">
			<table className="counter__table">
				<thead>
					<tr>
						{/* onClick={()=>tableSort(3)} */}
						<th scope='col' className="counter__table--name">名前</th>
						<th scope='col' >
							<button onClick={tableSort(3)}>YouTube</button>
						</th>
						<th scope='col'>
							<SortBtn sort={()=>tableSort(3)}></SortBtn>
						</th>
					</tr>
				</thead>
				<tbody>
						{dataList?dataList.map(data=>
						{
							return(
								<tr key={data[0]}>
								<td>{data[0]}</td>
								<td>{data[4]}</td>
								<td>{data[5]}</td>
							</tr>)
						}
						):
							<tr>
								<td> -- </td>
								<td> -- </td>
								<td> -- </td>
								<td> -- </td>
							</tr>
						}
				</tbody>
			</table>

		</div>
	)
}