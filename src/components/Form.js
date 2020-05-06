import React, {useState, useRef, useEffect} from "react"

function Form(props) {
	const [title, setTitle] = useState(props.title)
	const [description, setDescription] = useState(props.description)
	const inputField = useRef(null)

	useEffect(() => {
		props.status == "new" && inputField.current.focus()
	}, [])

	function handleSubmit(e) {
		e.preventDefault()
		alert(title)
	}
	return (
		<form id="form">
			<input type="text" 
				value={title} 
				onChange={e => setTitle(e.target.value)} 
				ref={inputField}
			/>
			<label>
				<input type="checkbox" />hot
			</label>
			<br />
			<textarea value={description}
				onChange={e => setDescription(e.target.value)}
				placeholder="Describe your task" />
			<ul>
				<li style={{display: "inline-flex"}}>add deadline</li><span>  </span>
				<li style={{display: "inline-flex"}}>{props.performer ? props.performer : "add performer"}</li>
			</ul>
			<button onClick={handleSubmit}>add</button>
		</form>
	)
}

// 			id: 2, 									auto timestamp 				auto
//         title: "Grocery shopping",				input 						default
//         status: "done",							auto new OR hot				checkbox
//         description: "This is todos descr",		auto null OR input 			?
//         deadline: "time",						null OR input 				on button
//         performer: "Olina",						auto user OR input 			on button
//         performerInfo: "me@gmail.com"			auto usermail OR input 		on button

export default Form