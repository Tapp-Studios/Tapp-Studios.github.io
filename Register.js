let text =
'{ "firstName":"John"},' +
'{ "firstName":"Anna"},' +
'{ "firstName":"Peter"}';
const parsed = JSON.parse(text);
alert(parsed);
function compareInput() {
  const input = document.getElementById("input").value;
  for (const key in parsed){
    if(obj.hasOwnProperty(key)){
      alert("Match found!");
    }
  }
}
