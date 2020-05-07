import React from 'react';
import { ListGroup } from 'reactstrap';
import TodoListItem from './TodoListItem';

const TodoList= props=> {
    
    let listItems = props.items.map((td, i)=>{
        return (<TodoListItem key={i} index={i} done={props.done} del={props.del} item={td}/>)
    })

   return(
         <ListGroup>{listItems} </ListGroup>
          )
    }

export default TodoList