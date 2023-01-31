const username = "Spencer"
function compareInput() {
  const input = document.getElementById("input").value;
  if (username==input) {
    alert("Match found!");
  } else {
    alert("No match found.");
  }
}