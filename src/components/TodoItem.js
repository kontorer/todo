import React, {useState} from "react"

function TodoItem(props) {
	const [status, setStatus] = useState(props.status)
	const enteringStat = props.status
	function flip() {
		status == "done" ?
		setStatus(enteringStat == "done" ? "new" : enteringStat) :
		setStatus("done")
	}
	return (
		<div className={"flex"}>
			<div className={`elem ${status}`}>
				{status == "done" ? 
					<input type="checkbox" checked onClick={flip} /> : 
					<input type="checkbox" onClick={flip} />
				}
				<p>{props.title}</p>
			</div>
			<div><i class="ri-information-line"></i></div>	
		</div>
	)
}

export default TodoItem