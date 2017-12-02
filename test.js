function addElement () { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  alert("added")
  document.body.insertBefore(newDiv, currentDiv); 
}
addElement()

var a = navigator.oscpu
console.log("=========");
alert("HEYEYEEYEYYE")
alert(navigator.oscpu);
console.log("=========");
