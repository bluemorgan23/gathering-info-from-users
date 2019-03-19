const postLego = (legoToSave) => {
    return fetch("http://localhost:8088/legoCreation", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
    .then(response => response.json())
}

const getLego = () => {
    return fetch("http://localhost:8088/legoCreation")
    .then(response => response.json());
}