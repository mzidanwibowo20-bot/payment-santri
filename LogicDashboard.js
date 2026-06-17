const name =
localStorage.getItem("studentName");

const saldo =
localStorage.getItem("studentSaldo");

// Tampilkan data
document.getElementById("welcome").innerHTML =
"Welcome " + name;

document.getElementById("saldo").innerHTML =
"Saldo: Rp " + saldo;

// Tombol Home
const button =
document.getElementById("homeBtn");

button.onclick = function(){

  window.location.href =
  "index.html";

};

// Tekan Enter = Go Home
document.addEventListener(
  "keydown",
  function(event){

    if(event.key === "Enter"){

      button.click();

    }

  }
);
