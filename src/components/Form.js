import React, {useState, useRef, useEffect, useContext} from "react"

import {Context} from "../Context"

function Form(props) {
	const inputField = useRef(null)
	const {id, title, description, deadline, performer, performerInfo, isDone, isHot} = props.task
	const {editItem, flipHot, flipDone, updateDB} = useContext(Context)

	useEffect(() => {
		props.status == "new" && inputField.current.focus()
		return () => {
			props.status != "new" && updateDB(id)
			console.log("unmounting", id)
		}
	}, [id])

	function handleSubmit(e) {
		e.preventDefault()
		alert(title)
	}

	console.log(id || props.status)

	return (
		<form id="form" className={props.status}>
			<input type="text" 
				value={title} 
				name="title"
				onChange={e => editItem(e, (id || props.status))} 
				ref={inputField}
			/>

			<label>
				{isHot ? 
					<input type="checkbox" onChange={e => flipHot((id || props.status))} checked /> : 
					<input type="checkbox" onChange={e => flipHot((id || props.status))} /> }
				hot
			</label>
			<br />

			<textarea value={description}
				name="description"
				onChange={e => editItem(e, (id || props.status))} 
				placeholder="Describe your task" 
				rows="15"
			/>

			<ul>
				<li style={{display: "inline-flex"}}>add deadline</li><span>  </span>
				<li style={{display: "inline-flex"}}>{performer ? performer : "add performer"}</li>
			</ul>
			{props.addItem && <button onClick={e => props.addItem(e)}>Create</button>}
		</form>
	)
}


// 			id: 2, 									auto timestamp 				auto
//         title: "Grocery shopping",				input 						default
//         status: "done",							auto new OR hot				checkbox
//         description: "This is todos descr",		auto null OR input 			?
//         deadline: "time",						null OR input 				on button
//         performer: "Olina",						auto user OR input 			on button
//         performerInfo: "me@gmail.com"			auto usermail OR input 		on button

export default Form