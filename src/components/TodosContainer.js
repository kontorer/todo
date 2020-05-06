import React, {useContext} from "react"
import {Link} from "react-router-dom"

import todosData from "../todosData"
import TodoItem from "./TodoItem"
import InputTodo from "./InputTodo"
import Form from "./Form"
import {Context} from "../Context"

function TodosContainer() {
	const {items} = useContext(Context)

	const todos = items.map(el => <TodoItem key={el.id} id={el.id} title={el.title} status={el.status}/>)
	return (
		<div className={"container"}>
			<div className="todosconthead">
				<h1>TodosContainer</h1>
				<span className="icon">
					<Link to="/"><i class="ri-add-circle-fill ri-2x"></i></Link>
				</span>
			</div>			
			{todos}
		</div>
	)
}

export default TodosContainer