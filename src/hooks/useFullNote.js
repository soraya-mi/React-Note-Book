import React from 'react';
import {FullNoteProviderContext} from "../contexts/FullNoteProvider";
function useFullNote() {
   const context = React.useContext(FullNoteProviderContext)
   if (context === undefined) {
     throw new Error('fullNote must be used within a fullNoteProvider')
   }
   console.log("fullNote")
   return context
 }
export default useFullNote; 