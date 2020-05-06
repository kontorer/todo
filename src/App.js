import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import {ContextProvider} from "./Context"

function App() {
  return (
    <ContextProvider>
      <Header />
      <Main />
      <Footer />
    </ContextProvider>
  )
}

export default App
