'use client'
import React from 'react'
import ChannelList from "./ChannelList";
import './Stats.css'
const Stats = ({channelList}) => {
	// console.log(channelList)
	return (
		<div className="counter__content">
			<ChannelList channelList={channelList[0]} title={"メインチャンネル"}/>
			<ChannelList channelList={channelList[1]} title={"グループチャンネル"}/>
			{/* <ChannelList channelList={channelList[2]} title={"個人チャンネル"}/> */}

		</div>
	)
}

export default Stats