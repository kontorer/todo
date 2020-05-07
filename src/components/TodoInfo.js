import React, {useEffect, useContext} from "react"
import {useParams} from "react-router-dom"

import {Context} from "../Context"
import Form from "./Form"

function TodoInfo() {
	const {elId} = useParams()
	const {items} = useContext(Context)

	function form(){
		const a = items.find(el => el.id == elId)
		if(typeof a == "object"){			
			const {id, title, description, deadline, performer} = a
			return <Form task={a} />
		}
	}

	return (
		<div>
			<h1>Task details</h1>
			{form()}
		</div>
	)
}

export default TodoInfo