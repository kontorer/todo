import React from "react"
import {useParams} from "react-router-dom"

import todosData from "../todosData"
import Form from "./Form"

function TodoInfo() {
	const {elId} = useParams()
	console.log(elId)
	const {title, description, deadline, performer} = todosData.find(el => el.id == elId)
	return (
		<div>
			<p>todo info here</p>
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{deadline}</p>
			<Form title={title} description={description} performer={performer}/>
		</div>
	)
}

export default TodoInfo