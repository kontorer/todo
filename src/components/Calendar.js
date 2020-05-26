import React, {useContext} from "react"
import SimpleReactCalendar from "simple-react-calendar"

import {Context} from "../Context"

function Calendar() {
	const {items} = useContext(Context)

	const dates = new Array
	items.forEach(el => {
		el.deadline && dates.push({start: el.deadline, end: el.deadline})
	})

	return (
		<div className={"calendar"}>
			<SimpleReactCalendar 
				activeMonth={new Date()} 
				disabledIntervals={dates} 
				onDayHover={e => <div>cnjwrnfr</div>} />
		</div>
	)
}

export default Calendar