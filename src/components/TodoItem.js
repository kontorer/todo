import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function TodoItem(props) {
	const {items} = useContext(Context)
	const [status, setStatus] = useState(props.status)
	const enteringStat = props.status

	const {id, title, description, deadline, performer} = items.find(el => el.id == props.id)
	
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
				<p>{title}</p>
			</div>
			<div><Link to={`/todo/${id}`}><i class="ri-information-line"></i></Link></div>	
		</div>
	)
}

export default TodoItem