import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function TodoItem(props) {
	const {items, flipDone} = useContext(Context)

	const {id, title, description, deadline, performer, isDone} = items.find(el => el.id == props.id)

	return (
		<div className={"flex"}>
			<div className={`elem ${isDone && "done"}`}>
				{isDone == true ? 
					<input type="checkbox" checked onChange={() => flipDone(id)} /> : 
					<input type="checkbox" onChange={() => flipDone(id)} />
				}
				<p>{title}</p>
			</div>
			<div><Link to={`/todo/${id}`}><i className="ri-information-line"></i></Link></div>	
		</div>
	)
}

export default TodoItem