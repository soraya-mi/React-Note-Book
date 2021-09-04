import  './newNote.module.css';
import {React,useState} from "react";
import { TextField,Button,Box } from '@material-ui/core';
import useNotesActions from "../../hooks/useNotesAction";
const NewNote=()=>{
  const [Id,setID]=useState(0);
  const initialState={id:Id,title:'',content:''};
    const [newNote,setNewNote]=useState(initialState);
    const setNotes=useNotesActions();
    const addTitleHandler=(e)=>{
    let note={...newNote,id:Id,title:e.target.value};
    setNewNote(note);
    }
    const addContentHandler=(e)=>{
      let note={...newNote,id:Id,content:e.target.value};
      setNewNote(note);
    }
    const SaveNoteHandler=(e)=>{
      setNotes(prev=>[...prev, newNote]);
      let newID=Id+1;
      setID(newID);
      setNewNote(initialState);   
    }
    return(
      <>
      <Box>
       <h3>New Note</h3>
       <hr/>
        <Box component="div">
            <div>
                <TextField value={newNote.title} id="title" name="title" label="Title"  onChange={addTitleHandler}/>
            </div>
            <div>
                <TextField value={newNote.content} id="content" label="Content" placeholder="Type something" multiline onChange={addContentHandler}/> 
            </div>
            <div>
              <Button id="add" variant="contained" color="primary" type="submit" onClick={SaveNoteHandler}>Save</Button>  
            </div> 
        </Box>
      </Box>
        </>
    )
}
export default NewNote