fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
var unames =["Spencer","John"]
alert(unames);
function compareInput() {
  const input = document.getElementById("input").value;
  for (let i = 0; i < unames.length; i++){
    if(input==unames[i]){
      alert("Match found!");
    }
  }
}
