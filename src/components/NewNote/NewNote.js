import  './newNote.module.css';
import {React,useState,useEffect} from "react";
import { TextField,Button,Box } from '@material-ui/core';
import useNotes from "../../hooks/useNotes";
import useNotesActions from "../../hooks/useNotesAction";
const NewNote=()=>{
    const [newNote,setNewNote]=useState({title:'',content:''});
    const notes=useNotes();
    const setNotes=useNotesActions();
    const addTitleHandler=(e)=>{
    let note={...newNote,title:e.target.value};
    setNewNote(note);
    }
    const addContentHandler=(e)=>{
      console.log("Dhfh")
      let note={...newNote,content:e.target.value};
      setNewNote(note);
    }
    const addNoteHandler=(e)=>{
      console.log("addNoteHandler")
      let allNotes=notes;
      console.log(allNotes)
      setNotes(prev=>[...prev, newNote]);
    }
    return(
      <>
      <Box>
       <h3>New Note</h3>
        <Box component="div">
            <div>
                <TextField value={newNote.title} id="title" name="title" label="Title"  onChange={addTitleHandler}/>
            </div>
            <div>
                <TextField value={newNote.content} id="content" label="Content" placeholder="Type something" multiline onChange={addContentHandler}/> 
            </div>
            <div>
              <Button id="add" variant="contained" color="primary" type="submit" onClick={addNoteHandler}>Add</Button>  
            </div> 
        </Box>
      </Box>
        </>
    )
}
export default NewNote