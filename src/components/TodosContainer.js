import React from "react"
import todosData from "../todosData"

import TodoItem from "./TodoItem"

function TodosContainer() {
	const items = todosData.map(el => <TodoItem key={el.id} title={el.title} status={el.status}/>)
	// fetch("http://localhost:3004/posts/")
	// 	.then(resp => resp.json())
	// 	.then(data => console.log(data))
	return (
		<div className={"container"}>
			<h1>TodosContainer</h1>
			{items}
		</div>
	)
}

export default TodosContainer