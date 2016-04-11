import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

var TodoList = ({todos}) => {
    let todoElm = todos.map((todo) => {
        return <li key={todo.id}>{todo.value}</li>
    })
    return <ul>
        {todoElm}
    </ul>
}

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList