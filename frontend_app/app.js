console.log("script executed");

let url = "http://127.0.0.1:7000/fen"
fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById("page-header").textContent = data;
    })
    .catch(error => {
        // handle the error
        console.error(error);
    });