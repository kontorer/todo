import React from "react"
import logo from "../logo.png"

function Header() {

	return (
		<header>
			<div style={{display: "flex"}}>
				<img src={logo} style={{width: 50}}/>
				<p>ToDo App for Kursova</p>
			</div>
			<p>Hi Olina</p>
		</header>
	)
}


export default Header