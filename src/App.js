import React, { useState } from 'react';
import {  Container } from 'reactstrap';

//Resources 
import './App.css';

// Custom components
import StatuBar from './components/StatusBar';
import Controls from './components/Controls';
import TodoList from './components/TodoList';


function App() {
  // Declare a default list of items
  let [items, setItems]= useState([
    {text: 'Walk the dog  🐈', done:false},
    {text: 'Do the dishes 🍽', done: true},
    {text: 'Prepare dinner 🥙', done: false}
  ])

  const clear = () =>{    
    setItems([]) 
  }
  
  const add =(itemText)=>{
    setItems([...items,{text: itemText, done: false }])
  }

  const done =(index)=>{
    let currentItems = [...items] // Makes a deep copy, can also work with items.slice() instead of [...items]
    currentItems[index].done = !currentItems[index].done
    setItems(currentItems)
  }

  const del =(index)=>{
    console.log('delete index',index)
    let currentItems = [...items] // Makes a deep copy, can also work with items.slice() instead of [...items]
    currentItems.splice(index,1)
    setItems(currentItems)
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Stuff You Should do</h1>
      </header>
      <StatuBar items={items}/>
      <Container> 
        <Controls clear={clear} add={add} />
        <hr/>
        <h2>Current List</h2>
        <TodoList items={items} done={done} del={del}/>
      </Container>
      
    </div>
  );
}

export default App;
