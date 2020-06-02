import React, {useContext} from "react"
import {Link} from "react-router-dom"

import TodoItem from "./TodoItem"
import InputTodo from "./InputTodo"
import Form from "./Form"
import {Context} from "../Context"

function TodosContainer() {
	const {items} = useContext(Context)

	const todos = items.map(el => el.id != "new" && <TodoItem key={el.id} id={el.id} title={el.title} isDone={el.isDone}/>)
	return (
		<div className={"container"}>
			<div className="todosconthead">
				<h1>TodosContainer</h1>
				<span className="icon">
					<Link to="/"><i className="ri-add-circle-fill ri-2x"></i></Link>
				</span>
			</div>			
			{todos.length > 1 ? todos : "Let's add your first task"}
		</div>
	)
}

export default TodosContainer