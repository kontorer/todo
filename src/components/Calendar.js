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
			<h1>Calendar</h1>
			<SimpleReactCalendar 
				activeMonth={new Date()} 
				disabledIntervals={dates} 
				onDayHover={e => <h1>cnjwrnfr</h1>} 
				headerNextArrow={">"}
				headerPrevArrow={"<"} />
		</div>
	)
}

export default Calendar