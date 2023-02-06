fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
function compareInput() {
  const input = document.getElementById("input").value;
  for (let i = 0; i < unames.length; i++){
    if(input==unames[i]){
      alert("Match found!");
      window.location.replace("https://tapp-studios.github.io");
    }
  }
}
