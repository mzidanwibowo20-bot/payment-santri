let StudenName = {

    name: "Kai",
    saldo: 50000+50000
  
  };
  const StudenID = "20112010"
  function test(){
console.log("Name "+StudenName.name);
console.log("ID "+StudenID);
console.log("salod "+StudenName.saldo);
  }
  test();





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

    result.innerHTML =
    "Saldo: " + student.saldo;

  }

  else{

    result.innerHTML =
    "ID not found 😭";

  }

};





button.onclick = function(){

  const input =
  document.querySelector("input").value;

  if(input === student.id){

    result.innerHTML =
    student.name + " " + "Saldo: "+ student.saldo;
  }
  else{

    result.innerHTML =
    "ID not found" ;

  }

};