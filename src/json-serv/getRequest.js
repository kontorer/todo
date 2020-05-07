const axios = require('axios')

function initImport() {
	axios.get('http://localhost:3001/todosDB')
	    .then(resp => {
	    	const gg = resp.data
	        return gg       
	    })
	    .catch(error => {
	        console.log(error)
	    })
}

export {initImport}
	   