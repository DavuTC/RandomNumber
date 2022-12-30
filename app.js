const siralaButon = document.getElementById("siralaBtn");
const rastgeleButon = document.getElementById("rastgeleBtn");
const sayilarKutusu = document.getElementById("sayilarKutusu");
const renkleriKaldir = document.getElementById("renkleriKaldir");

function butonCalistir() {
  for (let i = 1; i < 100; i++) {
    if (i % 10 == 0) {
           result = "<span style='color:blue;'>" + i + "</span>";
           sonuc += i + "<br><br>";
        } else if (i == randomNumber) {
          result = "<span style='color:blue;'>" + i + "</span>";
           continue;
         } else sonuc += i + " ";
  }

  siralaButon.setAttribute("disabled", true);
  rastgeleButon.removeAttribute("disabled");
}

siralaButon.addEventListener("click", butonCalistir);

function rastgeleBoya() {
  const random = Math.floor(Math.random() * 100);
  const element = document.querySelector(`.sayi${random}`);

  element.style.color = "blue";
}
 renkleriKaldir.addEventListener("click", () => {
//   const tumSayilar = document.querySelectorAll("#sayilarKutusu span");

//   tumSayilar.forEach((element) => {
//     element.style.color = "black";
//   });
// });

// rastgeleButon.addEventListener("click", rastgeleBoya);
// for (let i = 1; i <= 99; i++) {
//   if (i % 10 == 0) {
//     result = "<span style='color:blue;'>" + i + "</span>";
//     sonuc += i + "<br><br>";
//   } else if (i == randomNumber) {
//     result = "<span style='color:blue;'>" + i + "</span>";
//     continue;
//   } else sonuc += i + " ";
