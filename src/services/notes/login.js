export const login = Credential => {
    return fetch('http://localhost:3001/api/login',{
    method: "POST",
    body: JSON.stringify(Credential),
    headers:{
        "Content-type": "application/json; charset= UTF-8",
    }
    })
        .then(resp => resp.json())
        .then(res => {return res})
}