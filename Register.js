fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
var passes =["password","example"]

function compareInputs() {
    const input = document.getElementById("userin").value;
    const passin = document.getElementById("passin").value;
    for (let i = 0; i < unames.length; i++){
        if(input==unames[i]){
            for (let j = 0; j < passes.length; j++){
                if(passin==passes[i]){
                    window.location.replace("https://tapp-studios.github.io");
                } else {
                    alert("invalid username or password");
                }
            }
        }
    }
}
