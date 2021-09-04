import React from 'react';
import {NotesProviderContext} from "../contexts/NotesProvider";
function useNotes() {
   const context = React.useContext(NotesProviderContext)
   if (context === undefined) {
     throw new Error('useNotes must be used within a NotesProvider')
   }
   console.log("usenotes")
   return context
 }
export default useNotes; 

   // const a=React.useContext(NotesProviderContext);
  //   React.useEffect(()=>{
  //  console.log("update usenotes hook")    
  //  })