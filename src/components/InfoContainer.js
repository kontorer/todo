import React from "react"
import {Link, Route, Switch, useParams} from "react-router-dom"

import TodoInfo from "./TodoInfo"
import InputTodo from "./InputTodo"

function InfoContainer() {
	return (
		<div className={"container"}>
			<div>
				<Link to="/1">1 </Link>
				<Link to="/2">2 </Link>
				<Link to="/3">3</Link>
			</div>
			<Switch>
				<Route path="/1">
					<p>1elem</p>
				</Route>
				<Route path="/2">
					<p>2elem</p>
				</Route>
				<Route path="/3">
					<p>3elem</p>
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