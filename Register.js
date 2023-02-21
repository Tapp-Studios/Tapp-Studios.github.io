fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
var passes =["password","example"]
var e=0
function compareInputs() {
    const input = document.getElementById("userin").value;
    const passin = document.getElementById("passin").value;
    for (let i = 0; i < unames.length; i++){
        e=0
        if(input==unames[i]){
            for (let j = 0; j < passes.length; j++){
                if(passin==passes[i]){
                    window.location.replace("https://tapp-studios.github.io");
                } else {
                    e=e+1
                }
            }
        } else {
            e=e+1
        }
    }
    if(e>0){
      alert("Username or Password incorrect");
    }
}
