import {useEffect} from "react"

function usePreventWindowUnload(preventDefault, func) {
  useEffect(() => {
    if (!preventDefault) return
    const handleBeforeUnload = event => {
    	event.preventDefault()
    	console.log("NO")
    	func()
    }
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [preventDefault])
}

export default usePreventWindowUnload