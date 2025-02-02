'use client'
import React from 'react'
import './Videos.css'
function getTimeDiff(_time){
	try {
		const time=Number(_time)
		const diff=Date.now()-time
		//
		if(diff<0){
			//プレミア公開
			const options = {
				timeZone: 'Asia/Tokyo',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				hour12: false // 24時間表記
			};
			const date = new Date(time);
			const jstTime = date.toLocaleString('ja-JP', options)
			console.log(jstTime)
			return `${jstTime}に公開`
		}
		if(diff<1000*60*60){
			return `${Math.floor(diff/1000/60)}分前に公開`
		}else{
			return `${Math.floor(diff/1000/60/60)}時間前に公開`
		}
	} catch (error) {
		console.log(error)
		return "不明"
	}
}
const Videos = ({videoList}) => {
	console.log(videoList)
	return (
		<div className='video__content'>
			{videoList.map(video=>{
				return(
					<div className='video' key={video[6]}>
       			<div className="video__thumbnail">
							<a href={`https://www.youtube.com/watch?v=${video[6]}`}>
          			<img src={video[3]} alt="" />
							</a>
        		</div>
						<div className='video__details'>
							<div className='video__author'>
								<a href={`https://www.youtube.com/channel/${video[2]}`}>
									<img src={video[1]} alt="" />
								</a>
							</div>
							<div className="video__title">
								<a href={`https://www.youtube.com/watch?v=${video[6]}`}>
									<h3>
										{video[4]}
									</h3>
                </a>

                <a href={`https://www.youtube.com/channel/${video[2]}`} className='video__channelName'>
                  {video[0]}
                </a>
                <span>{getTimeDiff(video[5])}</span>
             </div>
						</div>
					</div>
				)
			})}
		
		</div>
	)
}

export default Videos