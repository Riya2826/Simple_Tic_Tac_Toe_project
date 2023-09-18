var rest=document.querySelector(".res")
var sqr=document.querySelectorAll("td")

rest.addEventListener("click",newrst)
function newrst() {
  for (var i = 0; i < sqr.length; i++) {
    sqr[i].textContent=''

  }
}
for (var i = 0; i < sqr.length; i++) {
  sqr[i].addEventListener("click",win);
}
function win() {
  if(this.textContent===""){
    this.textContent="X"

  }
  else if(this.textContent==="X"){
    this.textContent="O"
  }
  else{
    this.textContent=""

  }
}
