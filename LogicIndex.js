const button = document.querySelector(".btn");

const result = document.getElementById("result");

const students = [

  {
    id: "20112010",
    name: "Kai",
    saldo: 50000
  },

  {
    id: "20112011",
    name: "Ahmad",
    saldo: 75000
  },

  {
    id: "20112012",
    name: "Zidan",
    saldo: 100000
  }

];

// Cari student berdasarkan ID
function findStudent(id){

  return students.find(
    student => student.id === id
  );

}

// Tombol Checking
button.onclick = function(){

  const input =
  document.querySelector("input").value;

  const student =
  findStudent(input);

  if(student){

    localStorage.setItem(
      "studentName",
      student.name
    );

    localStorage.setItem(
      "studentSaldo",
      student.saldo
    );

    window.location.href =
    "dashboard.html";

  }

  else{

    result.innerHTML =
    "ID not found";

  }

};

// Tekan Enter = klik tombol
const inputField =
document.querySelector("input");

inputField.addEventListener(
  "keydown",
  function(event){

    if(event.key === "Enter"){

      button.click();

    }

  }
);
