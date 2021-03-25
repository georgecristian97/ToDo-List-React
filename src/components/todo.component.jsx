import { Button, Checkbox, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase';

function Todo(props) {
   
    const remover = (event) =>{
        // thill will fire off when we click the button
        event.preventDefault();
        db.collection('todos').doc(props.text.id).delete();
      }
    return (
        <List>
           
            <ListItem>
                <ListItemText >🗒 {props.text.todo}</ListItemText>
                <Button type="button" className="remover" onClick={remover}>❌ </Button>
            </ListItem>
        </List>
    )
}

export default Todo



