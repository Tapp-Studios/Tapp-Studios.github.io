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
        }
    }
}
function comparepassword() {
    for (let i = 0; i < passes.length; i++){
        if(input==passes[i]){
            alert("Password found");
            window.location.replace("https://tapp-studios.github.io");
        }
    }
}
