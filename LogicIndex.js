const button = document.querySelector(".btn");

const result = document.getElementById("result");

const student = {

  id: "20112010",
  name: "Kai",
  saldo: 50000

};

button.onclick = function(){

  const input =
  document.querySelector("input").value;

  if(input === student.id){
    
    window.location.href =
    "dashboard.html";

  }

  else{

    result.innerHTML =
    "ID not found";

  }

};