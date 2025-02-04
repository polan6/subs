"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faYoutube,faTwitter } from "@fortawesome/free-brands-svg-icons";
import './ChannelList.css'
const ChannelList = ({channelList,title}) => {
	const [sortedData,setSortedData]=useState(channelList)
	const tableSort=(index,isReverse=false)=>{
		if(isReverse){
			setSortedData([ ...sortedData.sort((a,b)=>{
				return Number(a[index])-Number(b[index])
			})])
		}else{
			setSortedData([ ...sortedData.sort((a,b)=>Number(b[index])-Number(a[index]))])
		}
		
	}
	return (
		<div>
		<h1>{title}</h1>
		<table className="counter__table">
		<thead>
			<tr>
				{/* onClick={()=>tableSort(3)} */}

				<th scope='col' className="counter__table--image"></th>
				<th scope='col' className="counter__table--image"></th>
				<th scope='col' className="counter__table--name">名前</th>
				<th scope='col' onClick={()=>tableSort(4)} className="cursor__pointer counter__table--number">
					登録者数
				<FontAwesomeIcon icon={faCaretDown} />
				</th>
				<th scope='col' onClick={()=>tableSort(5)} className="cursor__pointer counter__table--number">
					視聴回数<FontAwesomeIcon icon={faCaretDown} />
				</th>
				<th scope='col' onClick={()=>tableSort(6)} className="cursor__pointer counter__table--number">
					動画数<FontAwesomeIcon icon={faCaretDown} />
				</th>
				{title=='個人チャンネル'?<>
					<th scope='col' onClick={()=>tableSort(8,true)} className="cursor__pointer counter__table--number">
					投票<FontAwesomeIcon icon={faCaretUp} />
				</th>
				</>:<></>}
			</tr>
		</thead>
		<tbody>
				{sortedData?
				<>
				{sortedData.map(data=>
				{
					return(
						
						<tr key={data[0]}>
						<th className="counter__table--image counter__table--new">
						{/* {Number(data[6])-Number(data[7])} */}
							{Number(data[6])>Number(data[7])?<FontAwesomeIcon icon={faCircleExclamation} />:<></>}
						</th>
						<td>
							<a href={`https://www.youtube.com/channel/${data[3]}`}>
								<img src={data[1]} alt="アイコン"></img>
							</a>
						</td>
						<td>{data[0]}</td>
						<td>{new Intl.NumberFormat('ja-JP').format(data[4])}</td>
						<td>{new Intl.NumberFormat('ja-JP').format(data[5])}</td>
						<td>{new Intl.NumberFormat('ja-JP').format(data[6])}</td>
						{title=='個人チャンネル'?<>
						<td scope='col' onClick={()=>tableSort(8,true)} className="cursor__pointer counter__table--number">
							{Number.isInteger(Number(data[8]))?`${data[8]}位`:"--"}
						</td>
						</>:<></>}
					</tr>)
				})}
				<tr key="合計" className="counter__table--sum">
					<th scope="row" className="counter__table--image"></th>
					<th scope="row" className="counter__table--image"></th>
					<td><b>合計</b></td>
					<td>{new Intl.NumberFormat('ja-JP').format(sum(sortedData.map(v=>v[4])))}</td>
					<td>{new Intl.NumberFormat('ja-JP').format(sum(sortedData.map(v=>v[5])))}</td>
					<td>{new Intl.NumberFormat('ja-JP').format(sum(sortedData.map(v=>v[6])))}</td>
					
				</tr>
				</>
				:
					<tr>
						<td> -- </td>
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
function sum(array){
	return array.reduce((previousValue,currentValue) => Number(previousValue) + Number(currentValue), 0);
}
export default ChannelList