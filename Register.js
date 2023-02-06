fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
var passes =["password","example"]

function compareInputs() {
    const input = document.getElementById("userin").value;
    const input = document.getElementById("passin").value;
    for (let i = 0; i < unames.length; i++){
        if(input==unames[i]){
            for (let i = 0; i < passes.length; i++){
                if(input==passes[i]){
                    window.location.replace("https://tapp-studios.github.io");
                }
            }
        }
    }
}
