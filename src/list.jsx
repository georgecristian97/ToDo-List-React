import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';

import Todo from './components/todo.component';
import db from './firebase';
import firebase from 'firebase'

function ListToDo() {
  const [todos, setTodos] = useState([]);

  const [input,setInput] = useState('');

  useEffect(()=>{
    //this code here.. fires when app.js loads
    db.collection('todos'+user).orderBy('timestamp','desc').onSnapshot(snapshot => {
      //console.log((snapshot.docs.map(doc => doc.data().todo)));
      setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo:doc.data().todo, check_state:doc.data().isChecked})));

    })
  },[])

  const addToto = (event) =>{
    // thill will fire off when we click the button
    event.preventDefault();
    //console.log('👽 ','I am working!')
    //console.log(todos);
    if(input.length > 0){
      let ok =true;
      for(const i in todos){
        //console.log(todos[i]["todo"]);
        if(todos[i]["todo"] === input)
          {ok = false;break;}
      }
      if (ok===true)
        db.collection('todos').add({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
    setInput('')
  }
  return (
        <>
        <h1>Todo List</h1>
        <FormControl className="form-todo">

          <InputLabel className="input-todo">✅ Write a Todo</InputLabel>
          <div>
            <Input id="new_record" value={input} onChange={(e)=>setInput(e.target.value)} />
            <Button type="submit" onClick={addToto} variant="contained" color="primary">
                Add To Do
            </Button>
          </div>
          <ul >
            {
              todos.map(
                (todo, index)=>(
                <Todo key={index} text={todo}/>
                )
              )
            }
          </ul>
        </FormControl>
        </>
  );
}

export default ListToDo;
