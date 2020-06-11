import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import {v4 as uuid} from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id, title) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm(`Delete todo: ${title}`)) return;
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  addTodo=(title)=>{
    const newTodo = {
      id:uuid(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }

  render() {
    // console.log(this.state.todos);

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}



export default App;
