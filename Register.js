async function compareInput() {
    const input = document.getElementById("input").value;
    const response = await fetch("Data.json");
    const data = await response.json();
  
    for (let i = 0; i < data.UserData.length; i++) {
      if (data.UserData[i].Username === input) {
        alert("Match found!");
        return;
      }
    }
  
    alert("No match found.");
  }
  
  document.getElementById("submit").addEventListener("click", compareInput);