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
console.log(getTimeDiff("1738410408000"))