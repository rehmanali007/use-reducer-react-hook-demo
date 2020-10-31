import './App.css';
import React, { useReducer, useState } from 'react'
import TodoItem from './components/todoItem'


export const ACTIONS = {
  ADD_TDOD: 'add-todo',
  DEL_TODO: 'del-todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TDOD:
      return [...todos, action.payload.text]
    case ACTIONS.DEL_TODO:
      return todos.filter(todo => todo !== action.payload.id)
    default: return todos
  }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')


  return (
    <div className="App">
      <h2>useReducer Demo</h2>
      <input id='input' placeholder='Enter new Todo' onChange={e => setName(e.target.value)}></input>
      <br></br>
      <button style={{ margin: '30px' }} onClick={() => { dispatch({ type: ACTIONS.ADD_TDOD, payload: { text: name, id: name } }) }}>Add Todo</button>

      {todos.length !== 0 ? todos.map(todo => {
        return <TodoItem key={todo} todo={todo} dispatch={dispatch} />
      }) : (<p dangerouslySetInnerHTML={{ __html: 'No Items' }} />)}
    </div>
  );
}

export default App;
