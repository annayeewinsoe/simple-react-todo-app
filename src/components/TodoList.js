import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

export default function TodoList() {
   const [todos, setTodos] = useState([
      {id: 1, title: 'Learn Spanish'},
      {id: 2, title: 'Build a MERN Stack'},
      {id: 3, title: 'Take a nap'}
   ])

   const addTodo = (todo) => {
      let new_arr = [todo, ...todos]
      setTodos(new_arr) 
   }

   const deleteTodo = (id) => {
      let new_arr = todos.filter(todo => todo.id !== id)
      setTodos(new_arr)
   }

   return (
      <div>
         <AddTodo addTodo={addTodo} />
         <ul className="todo-list">
            {todos.map(todo => <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />)}
         </ul>
      </div>
   )
}
