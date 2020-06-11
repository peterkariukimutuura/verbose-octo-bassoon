import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render() {
        const {id,title}  = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} style={checkBoxStyle}/>
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id,title)}>x</button>
                </p>
            </div>
        )
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle ={
    backgroundColor: 'red',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right',
    outline:'none'
}

const checkBoxStyle ={
    marginRight:'5px'
}

export default TodoItem;


