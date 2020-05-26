import React, {useContext} from "react"

import {Context} from "../Context"

function Notes() {
	const {notes, setNotes} = useContext(Context)
		return (
			<div style={{height: "75%"}}>
				<h1>Notes</h1>
				<textarea style={{width: "100%", height: "100%", overflow: "scroll", border: "1px solid grey"}} value={notes} onChange={e => setNotes(e.target.value)} />
			</div>
		)
}

export default Notes