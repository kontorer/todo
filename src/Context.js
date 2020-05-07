import React, {useState, useEffect, useReducer} from "react"
import {useHistory} from "react-router-dom"
	
// json-server --watch todosDB.json --port 3001
import todosData from "./todosData"

const Context = React.createContext()
const axios = require('axios')

function ContextProvider(props) {
	const [items, setItems] = useState(todosData)
	const [uploaded, setUploaded] = useState(false)
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
	const history = useHistory()

	useEffect(() => {
		axios.get('http://localhost:3001/todosDB')
		    .then(resp => {
		        const data = resp.data
		        setItems(data)
		    })
		    .catch(error => {
		        console.log(error)
		        setItems(todosData)
		    })
	}, [])

	function addItem(e) {
		e.preventDefault()
		console.log("addingItem")
		const task = items.find(el => el.id == "new")
		task.id = items.length + 1 
		items.push({   
	        "id": "new",
	        "title": "",
	        "isDone": false,
	        "isHot": false,
	        "description": "",
	        "deadline": "",
	        "performer": "Olina",
	        "performerInfo": "me@gmail.com"
	    }) 
	    forceUpdate()
	    history.push(`/todo/${task.id}`)
	    console.log(items)
	}

	function editItem(e, id) {
		console.log("editing", e.target.name, id)
		const {name, value} = e.target
		const updated = items
		const upd = updated.map(el => {
			if(el.id == id){
				el[name] = value
			}
			return el
		})
		setItems(upd)
	}

	function deleteItem() {
		console.log("deleting")
	}

	function flipHot(id) {
		const updated = items
		const upd = updated.map(el => {
			if(el.id == id){
				el.isHot = !el.isHot
			}
			return el
		})
		setItems(upd)
	}

	function flipDone(id) {
		const updated = items
		const upd = updated.map(el => {
			if(el.id == id){
				el.isDone = !el.isDone
			}
			return el
		})
		setItems(upd)
	}

	function updateDB(e) {
		axios.put('http://localhost:3001/todosDB/', items)
			.then(resp => {
		    	console.log(resp.data)
		    	setUploaded(true)
			})
			.catch(error => {
		    	console.log(error)
			})
	}

	return (
		<Context.Provider value={{items, addItem, editItem, deleteItem, flipDone, flipHot, uploaded, updateDB}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}




