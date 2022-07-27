
import React from 'react'
class TodoList extends React.Component {
 
    render() {
      console.log(this.props.items)
  
      return (
        <ul>
          {this.props.items.map(item => (
            <li >{item.text} = {item.id.getHours() + ":" + item.id.getMinutes() + ":" + item.id.getSeconds()} </li>
          ))}
        </ul>
      );
    }
  }

  export default TodoList;