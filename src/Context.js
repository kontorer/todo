import React, {useState} from "react"

import todosData from "./todosData"

const Context = React.createContext()

function ContextProvider(props) {
	const [items, setItems] = useState(todosData)

	function addItem() {

	}

	function editItem() {

	}

	function deleteItem() {

	}

	function flipHot() {

	}

	function flipDone() {
		
	}

	return (
		<Context.Provider value={{items}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}