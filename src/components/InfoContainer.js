import React from "react"
import {Link, Route, Switch, useParams} from "react-router-dom"

import TodoInfo from "./TodoInfo"
import InputTodo from "./InputTodo"
import Pomodoro from "./Pomodoro"
import Notes from "./Notes"
import Calendar from "./Calendar"

function InfoContainer() {
	return (
		<div className={"container"}>
			<div>
				<Link to="/calendar">Calendar </Link>
				<Link to="/pomodoro">Productivity </Link>
				<Link to="/notes">Notes </Link>
			</div>
			<Switch>
				<Route path="/calendar">
					<Calendar />
				</Route>
				<Route path="/pomodoro">
					<Pomodoro />
				</Route>
				<Route path="/notes">
					<Notes />
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