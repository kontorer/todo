import React, {useState, useContext, useEffect} from "react"

import {Context} from "../Context"
import TodoItem from "./TodoItem"

function Pomodoro() {
	const workTime = {minutes: 20, seconds: 0}
	const restTime = {minutes: 5, seconds: 0}

	const [prodOn, setProdOn] = useState(false)
	const [timer, setTimer] = useState(0)
	const [mod, setMod] = useState("Work")
	const [time, setTime] = useState(workTime)

	const {items} = useContext(Context)

	useEffect(() => {
		if(prodOn) {
			setTimeout(() => {
				if(time.minutes == 0 && time.seconds == 0) {
					alert(`${mod} is over!`)
					if(mod == "Work") {
						setMod("Rest")
						setTime(restTime)
					} else {
						setMod("Work")
						setTime(workTime)
					}
				} else if(time.seconds == 0) {
					setTime({seconds: 59, minutes: time.minutes - 1})
				} else {
					setTime({minutes: time.minutes, seconds: time.seconds - 1})
				}
			}, 1000)
		}
	}, [prodOn, time])

	const todos = items.map(el => (el.isHot && !el.isDone) && <TodoItem key={el.id} id={el.id} title={el.title} isDone={el.isDone}/>)
	return (
		<div>
			<h1>Pomodoro Productivity Mode</h1>
			<button 
				onClick={() => setProdOn(!prodOn)}
				className={prodOn ? "pomoon button" : "pomooff button"}>
					{prodOn ? "Stop" : "Start"}
			</button>
			<button 
				onClick={() => {
					setTime(workTime)
					setMod("Work")
				}}
				className="reset button"
			>Reset</button><br />
			<div>
				<h3>{`${mod} ${time.minutes}:${(time.seconds + "").length == 1 ? `0${time.seconds}` : time.seconds}`}</h3>
			</div>
			{todos}
		</div>
	)
}

export default Pomodoro