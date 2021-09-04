const LocalStorage = {};//the getter method
LocalStorage.get = key => {
  return localStorage.getItem(key);
};//the setter method
LocalStorage.set = (key, value) => {
  return localStorage.setItem(key, value);
};//the remove method
LocalStorage.remove = key => {
  return localStorage.removeItem(key);
};
/**
 * get all notes
 **/
 LocalStorage.getNotes = () => {
    return LocalStorage.get("notes");
  };/**
   * get all notes of the notebooks
   **/
  LocalStorage.getNotebooks = notebook => {
    return LocalStorage.get(notebook);
  };/**
   * set a group of Notes
   **/
  LocalStorage.setNotes = value => {
    LocalStorage.set("notes", value);
  };/**
   * remove Notes
   **/
  LocalStorage.rmNotes = () => {
    LocalStorage.remove("notes");
  };/**
   * remove Notes
   **/
  LocalStorage.rmNoteBook = notebok => {
    LocalStorage.remove(notebok);
  };