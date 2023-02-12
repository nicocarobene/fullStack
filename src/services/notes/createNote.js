export const createNote = (noteToAddToState) => {
  return fetch("http://localhost:3001/api/notes ", {
    method: "POST",
    body: JSON.stringify(noteToAddToState),
    headers: {
      "Content-type": "application/json; charset= UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    });
};
