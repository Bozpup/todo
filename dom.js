/*var button= document.getElementsByTagName("button")[0];
button.addEventListener("mouseenter", function(){
    console.log("helloo");
})*/

var button = document.getElementById("enter");
var input = document.getElementById("enterinput");
var ul = document.querySelector("ul");
var list =  document.getElementsByTagName("li");

function inputLength(){
  return input.value.length;
}

function createElement(){

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value + "                        "));
  ul.appendChild(li);
  input.value=(" ");
  
  var deletebtn = document.createElement("button");
  deletebtn.appendChild(document.createTextNode( " -"));
  li.appendChild(deletebtn);
  deletebtn.onclick=removeParent;
  li.setAttribute("class","done");


}

for(i=0; i<listlength(); i++){
  var deleteButton = list[i].getElementsByClassName("btn")[0];
  console.log(deleteButton)
  deleteButton.addEventListener("click", removeParent);
  list[i].setAttribute("class","done");

  
}

function addListAfterClick(){
  if( inputLength() > 0 ){
    createElement();
  
  }
   
}
function addListAfterKeypress(e)
{
  if(input.value.length > 0 && e.key == "Enter"){
    console.log(e.key)
     createElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


 function listlength(){
  return list.length;
  }




function removeParent(event)
{
   event.target.parentNode.remove();
}

