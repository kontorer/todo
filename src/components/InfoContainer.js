import React from "react"
import {Link, Route, Switch, useParams} from "react-router-dom"

import TodoInfo from "./TodoInfo"
import InputTodo from "./InputTodo"

function InfoContainer() {
	return (
		<div className={"container"}>
			<div>
				<Link to="/1">Фича1 </Link>
				<Link to="/2">Фича2 </Link>
				<Link to="/3">Фича3</Link>
			</div>
			<Switch>
				<Route path="/1">
					<h1>Календарь?</h1>
				</Route>
				<Route path="/2">
					<h1>Не помню шо еще</h1>
				</Route>
				<Route path="/3">
					<h1>И еще Заметки</h1>
				</Route>
				<Route path="/todo/:elId">
					<TodoInfo />
				</Route>
				<Route exact path="/">
					<InputTodo />
				</Route>
			</Switch>

		</div>
	)
}

export default InfoContainer