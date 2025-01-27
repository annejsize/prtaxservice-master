

let toggle = document.querySelector("#togglemenu");
let items = document.querySelectorAll(".item");
let burger = document.getElementById("burger");


console.log(burger);
console.log(toggle);


function toggleMenu() {
    if (!toggle.classList.contains("responsive")) {
      toggle.classList.add("responsive");
      toggleIcon()
    } else {
     toggle.classList.remove("responsive");
     toggleIcon()
    }
}

function toggleIcon() {
    if (toggle.classList.contains("responsive")) {
      console.log("checking");
      burger.innerHTML = "<i class='fa fa-times'></i>";
    } else {
      burger.innerHTML = "<i class='fa fa-bars'></i>";
    }
  }

burger.addEventListener("click", toggleMenu, false);