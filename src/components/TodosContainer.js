import React from "react"
import {Link} from "react-router-dom"

import todosData from "../todosData"
import TodoItem from "./TodoItem"
import InputTodo from "./InputTodo"
import Form from "./Form"

function TodosContainer() {
	const items = todosData.map(el => <TodoItem key={el.id} id={el.id} title={el.title} status={el.status}/>)
	
	return (
		<div className={"container"}>
			<Link to="/"><button>addddd</button></Link>
			<h1>TodosContainer</h1>
			{items}
		</div>
	)
}

export default TodosContainer