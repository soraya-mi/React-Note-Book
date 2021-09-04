import React from 'react';
import {NotesProviderActionContext} from "../contexts/NotesProvider";
const useNotesActions=()=>{
    console.log("useNotesActions")
    return React.useContext(NotesProviderActionContext);
}
export default useNotesActions;
function useNotesActions() {
    const context = React.useContext(NotesProviderActionContext)
    if (context === undefined) {
      throw new Error('useNotesActions must be used within a NotesProvider')
    }
    console.log("useNotesActions")
    return context
  }
 export default useNotesActions;