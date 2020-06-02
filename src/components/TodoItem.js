import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function TodoItem(props) {
	const {items, flipDone} = useContext(Context)

	const {id, title, description, deadline, performer, isDone, isHot} = items.find(el => el.id == props.id)

	return (
		<div className={`flex elem${id}`}>
			<div className={`elem ${isDone && "done"} ${isHot && (!isDone && "hot")}`}>
				{isDone == true ? 
					<input type="checkbox" checked onChange={() => flipDone(id)} /> : 
					<input type="checkbox" onChange={() => flipDone(id)} />
				}
				<Link to={`/todo/${id}`}><p>{title}</p></Link>
			</div>
			<div><Link to={`/todo/${id}`}><i className="ri-information-line"></i></Link></div>	
		</div>
	)
}

export default TodoItem