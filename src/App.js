import React from 'react';
import TodoList from './TodoList'
import AddForm from './AddForm'
import {connect} from 'react-redux'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {todos: [
      {id: 0, value: 'React'},
      {id: 1, value: 'Redux'}
    ]}
  }
  render() {
    return <div>
      <AddForm addTodo={(value) => this.addTodo(value)}/>
      <TodoList todos={this.state.todos}/>
    </div>
  }

  addTodo(value){
    var todos = this.state.todos;
    this.setState({
      todos: [...todos, {
        id: todos.length,
        value: value
      }]
    })
  }
}

