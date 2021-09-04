import React from 'react';
import {FullNoteProviderActionsContext} from "../context/FullNoteProviderContext";
function useFullNoteActions() {
    const context = React.useContext(FullNoteProviderActionsContext)
    if (context === undefined) {
      throw new Error('useFullNoteActions must be used within a NotesProvider')
    }
    console.loag("useFullNoteActions")
    return context
  }
 export default useFullNoteActions;