import React, {useState, useRef, useEffect, useContext} from "react"
import DatePicker from 'react-date-picker'

import {Context} from "../Context"

function Form(props) {
	const inputField = useRef(null)
	const {id, title, description, deadline, performer, performerInfo, isDone, isHot} = props.task
	const {editItem, flipHot, flipDone, updateDB, setDeadl} = useContext(Context)

	useEffect(() => {
		props.status == "new" && inputField.current.focus()
		return () => {
			props.status != "new" && updateDB(id)
		}
	}, [id])

	function handleSubmit(e) {
		e.preventDefault()
		alert(title)
	}

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
			<br /><br />

			{!props.status &&
				<ul>
					{deadline == "" || deadline == null ? 
					<li style={{display: "inline-flex", marginLeft: -30}} onClick={e => setDeadl(new Date(), (id || props.status))}>add deadline</li> :
					<li className="picker">
						<span>Deadline: </span>
						<DatePicker 
							name="deadline"
							onChange={e => setDeadl(e, (id || props.status))}
							value={deadline}
						/>

					</li>
				}
					<li style={{display: "inline-flex", marginLeft: 10}}>{performer ? performer : "add performer"}</li>
				</ul>
			}
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