export const getAllNotes =()=>{
   return( fetch("http://localhost:3001/api/notes")
    .then(request => request.json())
    .then(json =>{return json})
   )
}