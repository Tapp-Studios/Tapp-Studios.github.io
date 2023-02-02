var users =["Spencer","John"]
alert(users);
function compareInput() {
  const input = document.getElementById("input").value;
  for (let i = 0; i < users.length; i++){
    if(input==users[i]){
      alert("Match found!");
    }
  }
}
