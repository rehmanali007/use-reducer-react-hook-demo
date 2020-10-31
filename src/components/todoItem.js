import React from 'react'
import { ACTIONS } from '../App'

// console.log(ACTIONS)

export default function TodoItem({ todo, dispatch }) {
    return (
        <div>
            <span>{todo}</span> <button onClick={() => { dispatch({ type: ACTIONS.DEL_TODO, payload: { id: todo } }) }}>Delete Todo</button>
        </div>
    )
}
