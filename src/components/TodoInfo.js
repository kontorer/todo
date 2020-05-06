import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import todosData from "../todosData"
import Form from "./Form"

function TodoInfo() {
	const {elId} = useParams()
	console.log(elId)
	const {title, description, deadline, performer} = todosData.find(el => el.id == elId)


	return (
		<div>
			<h1>Task details</h1>
			<Form title={title} description={description} performer={performer} />
		</div>
	)
}

export default TodoInfo