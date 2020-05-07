import React,{ useState } from 'react';
import {  Alert, Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Controls= props=> {
    // Declare a state variable to track the value in the input field
    let [newItem, setNewItem] = useState('')
    let [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit= e=>{
        e.preventDefault()
        if(newItem){
            props.add(newItem)
            setErrorMessage('')
        }
        else{
            setErrorMessage('Please type something')
        }
    }

    let alert = ''
    if(errorMessage){
        alert =(
        <Alert color="warning"> 
            {errorMessage}
        </Alert>
        )
    }


    return(
          <div>
              {alert}
            <h3>Add something to the list</h3>  
            <Form onSubmit={handleSubmit}>
                  <Row>  
                        <Col xs='7'>  
                            <FormGroup>
                                    <Input placeholder="New Item"
                                        value={newItem}
                                        onChange={e=> setNewItem(e.target.value)}
                                    />
                            </FormGroup>
                        </Col> 
                        <Col xs="5"> 
                            <Button color="primary" type="submit">Add</Button> {' '}
                            <Button color="danger" onClick={props.clear}>Clear</Button>
                        </Col>  
                 </Row>
            </Form>
          </div>
          )
    }

export default Controls