import React, {useState, useEffect, useReducer} from "react"
import {useHistory} from "react-router-dom"
	
// json-server --watch todosDB.json --port 3001
import todosData from "./todosData"

const Context = React.createContext()
const axios = require('axios')

function ContextProvider(props) {
	const [items, setItems] = useState([])
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
	const [notes, setNotes] = useState("")
	const history = useHistory()

	useEffect(() => {
		        // setItems(todosData)
		axios.get('http://localhost:3001/todosDB')
		    .then(resp => {
		        const data = resp.data
		        setItems(data)
		        console.log("connected")
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
		task.id = new Date().valueOf()
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
	    axios.post('http://localhost:3001/todosDB', task)
	    	.then(resp => {
		    	console.log(resp.data)
			}).catch(error => {
		    	console.log(error)
			})
	    forceUpdate()
	    history.push(`/todo/${task.id}`)
	    console.log(items)
	}

	function editItem(e, id) {
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

	function setDeadl(e, id){
		const updated = items
		const upd = updated.map(el => {
			if(el.id == id){
				el.deadline = e
				console.log(e)
			}
			return el
		})
		setItems(upd)
	}

	function deleteItem(id) {
		const conf = window.confirm("Delete this task?")
		if(conf) {
			const elem = document.querySelector(`.elem${id}`)
			elem.classList.add("hideme")
			const deleting = items.find(el => el.id == id)
			const upd = items
			upd.splice(items.indexOf(deleting), 1)
			setItems(upd)
			// axios.delete(`http://localhost:3001/todosDB/${id}`)
			//     .then(resp => {
			//         console.log(resp.data)
			//     }).catch(error => {
			//         console.log(error)
			//     })
			// const upd = items.map(el => {
			// 	if(el.id > id){
			// 		el.id = el.id - 1
			// 	}
			// 	return el
			// })
			// history.push(`/`)
			// setItems(upd)
			history.push(`/`)
			axios.delete(`http://localhost:3001/todosDB/${id}`)
				.then(resp => {
					console.log(resp.data)
				}).catch(error => {
				   	console.log(error)
				})
			// items.forEach(item => {
			// 	if(item.id > id){
			// 		const itemid = item.id
			// 		item.id -= 1
			// 		axios.patch(`http://localhost:3001/todosDB/${itemid}`, item)
			// 			.then(resp => {
			// 			    console.log(resp.data)
			// 			}).catch(error => {

			// 			    console.log(error)
			// 			})
			// 	}
			// })
		}
		console.log(items)
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

	function updateDB(id) {
		const putt = items.find(el => el.id == id)
		axios.put(`http://localhost:3001/todosDB/${id}`, putt)
			.then(resp => {
			    console.log(resp.data)
			}).catch(error => {

			    console.log(error)
			})
	}

	return (
		<Context.Provider value={{items, addItem, editItem, deleteItem, flipDone, flipHot, updateDB, setDeadl, notes, setNotes}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}


// history.push(`/`)
// axios.delete(`http://localhost:3001/todosDB/${id}`)
// 	.then(resp => {
// 		console.log(resp.data)
// 	}).catch(error => {
// 	   	console.log(error)
// 	})
// items.foreach(item => {
// 	if(item.id > id){
// 		const itemid = item.id
// 		item.id -= 1
// 		axios.put(`http://localhost:3001/todosDB/${itemid}`, item)
// 			.then(resp => {
// 			    console.log(resp.data)
// 			}).catch(error => {

// 			    console.log(error)
// 			})
// 	}
// })

