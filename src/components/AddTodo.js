import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input type="text" name="title" placeholder="Add Todo..." style={inputStyle}/>
                <input type="submit" value="submit" className="btn" style={{ flex: 1 }} />
            </form>
        )
    }
}

const inputStyle ={
    flex:'10',
    padding:'5px',
    outline:'none'
}

export default AddTodo
