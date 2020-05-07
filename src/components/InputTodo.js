import React, {useContext} from "react"

import {Context} from "../Context"
import Form from "./Form"

function InputTodo() {
	const {addItem} = useContext(Context)
	return (
		<div>
			<h2>Add a new task!</h2>
			<Form status="new" addItem={addItem} task={{}}/>
		</div>
	)
}

// 			id: 2, 									auto timestamp 				auto
//         title: "Grocery shopping",				input 						default
//         status: "done",							auto new OR hot				checkbox
//         description: "This is todos descr",		auto null OR input 			?
//         deadline: "time",						null OR input 				on button
//         performer: "Olina",						auto user OR input 			on button
//         performerInfo: "me@gmail.com"			auto usermail OR input 		on button

export default InputTodo