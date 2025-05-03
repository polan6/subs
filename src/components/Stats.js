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
			<ChannelList channelList={channelList[0]} title={"メインチャンネル"} />
			<ChannelList channelList={channelList[1]} title={"グループチャンネル"} />
			<ChannelList channelList={channelList[2]} title={"個人チャンネル"}/>
			<div className='counter__text'>
				<p>
				このサイトは50人クラフト/ニート部のメインチャンネル・参加勢のグループチャンネル・参加勢の個人チャンネルの登録者数・再生回数・動画数などを表示します。また、新着動画の一覧も見ることができます。
				</p>
				<p>
				<FontAwesomeIcon icon={faCircleExclamation} />マークがついているチャンネルは新着動画があるチャンネルです。
				</p>
				<p>
					作者Twitter: <a href='https://x.com/Polan6166'
					target="_blank" rel="noopener noreferrer"
					>https://x.com/Polan6166</a>
				</p>
			
			
			</div>
		</div>

		</>
	)
}

export default Stats