import React, {useState} from "react"
import {Link} from "react-router-dom"

function TodoItem(props) {
	const [status, setStatus] = useState(props.status)
	const enteringStat = props.status
	console.log("props", props)
	function flip() {
		status == "done" ?
		setStatus(enteringStat == "done" ? "new" : enteringStat) :
		setStatus("done")
	}
	return (
		<div className={"flex"}>
			<div className={`elem ${status}`}>
				{status == "done" ? 
					<input type="checkbox" checked onChange={flip} /> : 
					<input type="checkbox" onChange={flip} />
				}
				<p>{props.title}</p>
			</div>
			<div><Link to={`/todo/${props.id}`}><i class="ri-information-line"></i></Link></div>	
		</div>
	)
}

export default TodoItem