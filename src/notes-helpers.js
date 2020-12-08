
export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id === folderId)

export const findNote = (notes, noteId) => 
  notes.find(note => note.id === parseFloat(noteId))
  

export const getNotesForFolder = (notes=[], folderId) => {
  if(!folderId) {
     return notes
  } else {
    return notes.filter(note => note.folder_id === parseFloat(folderId)) 
  }
}
  


export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folder_id === parseFloat(folderId)).length
