import React, { useState } from 'react'

export default function AddTodo(props) {
   const { addTodo } = props
   const [title, setTitle] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      addTodo({
         id: Date.now(),
         title: title
      })
      setTitle('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Add a new todo..." required value={title} onChange={(e) => setTitle(e.target.value)} />
         <input type="submit" value="Add" />
      </form>
   )
}
