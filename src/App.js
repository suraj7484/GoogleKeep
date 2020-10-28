import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CreateNote from "./components/CreateNote"
import Note from "./components/Note"

const App = () => {
  const [addItem , setAddItem] = useState([])

  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev , note]
    })
  }
  const onDlt = (id) => {
  
    setAddItem((oldItem) => {
      return oldItem.filter((currdata , indx) => {
          return indx !== id
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote
       passNote = {addNote}
       />
      <div className = "noteContainer">
      {addItem.map((val , index) => {
          return <Note 
            key = {index}
            id = {index}
            title = {val.title}
            content = {val.content}
            delItem = {onDlt}
          />
        })}
      </div>
      <Footer />
    </>
  )
}

export default App