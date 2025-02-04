'use client'
import React from 'react'
import ChannelList from "./ChannelList";
import './Stats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const Stats = ({channelList}) => {
	// console.log(channelList)
	return (
		<>
		<div className="counter__content">
			<ChannelList channelList={channelList[0]} title={"メインチャンネル"}/>
			<ChannelList channelList={channelList[1]} title={"グループチャンネル"}/>
			{/* <ChannelList channelList={channelList[2]} title={"個人チャンネル"}/> */}
			<div className='counter__text'>
				<p>
				このサイトは50人クラフト/ニート部のメインチャンネル・参加勢のグループチャンネルの登録者数・再生回数・動画数などを表示します。
				</p>
				<p>
				<FontAwesomeIcon icon={faCircleExclamation} />マークがついているチャンネルは新着動画があるチャンネルです。
				</p>
			
			
			</div>
		</div>

		</>
	)
}

export default Stats