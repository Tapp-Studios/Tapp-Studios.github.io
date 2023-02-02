let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const parse = JSON.parse(text);
function compareInput() {
  const input = document.getElementById("input").value;
  for (const key in parse){
  if(obj.hasOwnProperty(key)){
    alert("Match found!");
  }
}
}
