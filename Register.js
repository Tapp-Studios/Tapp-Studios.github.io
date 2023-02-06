fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
var passes =["password","example"]

function compareInputs() {
    const input = document.getElementById("userin").value;
    for (let i = 0; i < unames.length; i++){
        if(input==unames[i]){
            alert("Username found");
            window.location.replace("https://tapp-studios.github.io");
        }
    }
}
