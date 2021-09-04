import React from 'react';
import {FullNoteProviderActionContext} from "../contexts/FullNoteProvider";
function useFullNoteActions() {
    const context = React.useContext(FullNoteProviderActionContext)
    if (context === undefined) {
      throw new Error('useFullNoteActions must be used within a NotesProvider')
    }
    console.log("useFullNoteActions")
    return context
  }
 export default useFullNoteActions;