import React from 'react'
import "./Footer.css"
const Footer = ({page,setPage}) => {
	return (
		<footer>
			<h3 onClick={()=>setPage(0)} className={page==0?'footer__selected':undefined}>統計</h3>
			<h3 onClick={()=>setPage(1)} className={page==1?'footer__selected':undefined}>新着動画</h3>
		</footer>
	)
}

export default Footer