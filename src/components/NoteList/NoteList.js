import {Box} from "@material-ui/core";
import Note from '../Note/Note';
import {React,useEffect} from 'react';
import '../NoteList/noteList.css';
import useNotes from "../../hooks/useNotes";
const NoteList=()=>{
    console.log('in list')
    const notelist=useNotes();
    useEffect(()=>{
        console.log(("list rendered"))
    })
    return(
        <Box>
            <h3>Note List</h3>
            <ul>
                {notelist.map((note)=>{return <Note key={note.title} title={note.title} content={note.content}/>})}
            </ul>
        </Box> 
    )
}
export default NoteList
    // console.log(notes)
    // const list=notes.map((note)=>{
    //     return(<Note id={note.title} title={note.title} content={note.content}/>);
    // })
            /* <Box display="flex" flexWrap="wrap">    
        <ul>
            {list.map((note)=>{return <Note id={note.title} title={note.title} content={note.content}/>})}
        </ul>    
        </Box> */
        // console.log(notelist)
        // const renderThings = things => {
        //     return things.map( note => {
        //         return <Note id={note.title} title={note.title} content={note.content}/>
        //     })
        //   }
        // console.log("in the list")
        /* {renderThings(notelist)} */