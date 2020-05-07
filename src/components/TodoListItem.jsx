import React from 'react';
import {  Badge, Col, ListGroupItem, Row } from 'reactstrap';


const TodoListItem= props=> {

   return(
            <ListGroupItem color={props.item.done ? 'info' : 'success'}> 
                <Row> 
                    <Col xs="9"> 
                        {props.item.done ? <del> {props.item.text} </del> : props.item.text}
                    </Col>
                    <Col xs="3"> 
                         <Badge className="pointer" color="success" onClick={()=>props.done(props.index)}>✓  </Badge>
                           {' '}  {/*  the curly braces with empty quotes- creates space between badges   */}
                        <Badge className="pointer" color="danger"  onClick={()=>props.del(props.index)}>⤬  </Badge>
                    </Col>
                </Row>
            </ListGroupItem>
         )
    }

export default TodoListItem