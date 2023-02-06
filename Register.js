fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
var passes =["password","example"]

function compareInputs() {
    alert("JS started");
    const input = document.getElementById("userin").value;
    const input = document.getElementById("passin").value;
    for (let i = 0; i < unames.length; i++){
        if(input==unames[i]){
            alert("Username found");
            comparepassword()
            window.location.replace("https://tapp-studios.github.io");
        }
    }
}
