"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faYoutube,faTwitter } from "@fortawesome/free-brands-svg-icons";
const ChannelList = ({dataList,title}) => {
	const [sortedData,setSortedData]=useState(dataList)
	const tableSort=(index)=>{
		setSortedData([ ...sortedData.sort((a,b)=>b[index]-a[index])])
	}
	return (
		<div>
		<h1>{title}</h1>
		<table className="counter__table">
		<thead>
			<tr>
				{/* onClick={()=>tableSort(3)} */}
				<th scope='col' className="counter__table--name">名前</th>
				<th scope='col' onClick={()=>tableSort(4)} className="cursor__pointer">
					登録者数
				<FontAwesomeIcon icon={faCaretDown} />
				</th>
				<th scope='col' onClick={()=>tableSort(5)} className="cursor__pointer">
					視聴回数<FontAwesomeIcon icon={faCaretDown} />
				</th>
				<th scope='col' onClick={()=>tableSort(6)} className="cursor__pointer">
					視聴回数<FontAwesomeIcon icon={faCaretDown} />
				</th>
			</tr>
		</thead>
		<tbody>
				{sortedData?sortedData.map(data=>
				{
					return(
						<tr key={data[0]}>
						<td>{data[0]}</td>
						<td>{new Intl.NumberFormat('ja-JP').format(data[4])}</td>
						<td>{new Intl.NumberFormat('ja-JP').format(data[5])}</td>
						<td>{new Intl.NumberFormat('ja-JP').format(data[6])}</td>
					</tr>)
				}
				):
					<tr>
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

export default ChannelList