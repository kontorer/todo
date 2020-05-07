import React, {useContext} from "react"

import TodosContainer from "./TodosContainer"
import InfoContainer from "./InfoContainer"
import usePreventWindowUnload from "../hooks/usePreventWindowUnload"

import {Context} from "../Context"

function Main() {
	const {uploaded, updateDB} = useContext(Context)
	usePreventWindowUnload(true, updateDB)
	return (
		<main>
			<TodosContainer />
			<InfoContainer />
		</main>
	)
}

export default Main