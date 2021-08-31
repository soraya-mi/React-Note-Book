import  './newNote.module.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField,Button,Box } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, rgba(254,107,139,0.8) 30%, rgba(255,142,83,0.7) 90%)',
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .9)',
        color: 'white',
        width: 'auto',
        padding: '.3rem .5rem',
      },
    content: {
        width: "5rem;",
    }
  }));
const NewNote=()=>{
    // const classes = useStyles();
    return(
      <>
      <Box>
       <h3>New Note</h3>
        <Box component="div">
         
            <div>
                <TextField
                id="title"
                name="title"
                 label="Title"/>
            </div>
            <div>
                <TextField
                id="standard-multiline-flexible"
                label="Content"
                placeholder="Type something"
                 multiline/> 
            </div>
            <div>
              <Button variant="contained" color="primary" type="submit">Add</Button>  
            </div> 
        </Box>
        </Box>
        </>
    )
}
export default NewNote