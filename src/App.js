import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res=>this.setState({todos:res.data}));
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

    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    
  }

  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false}).then(res=>this.setState({ todos: [...this.state.todos, res.data] }));
    
  }

  render() {
    // console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                <small style={{ display:this.state.todos.length !== 0 ? 'none' : '',marginTop:'4px' }}>No records found</small>
              </React.Fragment>
            )} />

            <Route path="/about" component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}



export default App;
