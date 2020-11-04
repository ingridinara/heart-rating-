// ************************
// 1. AÑADIR EVENTOS AL DOM
// ************************

// 1.1 Click reset colors

document.getElementById("base").onclick = function () { resetColorIcon() };

// Link de interés: https://www.w3schools.com/jsref/event_onmouseout.asp

// 1.2 Mouse over

document.getElementById("1").onmouseover = function () { changeColorIcon(1) };
document.getElementById("2").onmouseover = function () { changeColorIcon(2) };
document.getElementById("3").onmouseover = function () { changeColorIcon(3) };
document.getElementById("4").onmouseover = function () { changeColorIcon(4) };
document.getElementById("5").onmouseover = function () { changeColorIcon(5) };

// 1.3 Mouse click

document.getElementById("1").onclick = function () { changeColorIcon(1) };
document.getElementById("2").onclick = function () { changeColorIcon(2) };
document.getElementById("3").onclick = function () { changeColorIcon(3) };
document.getElementById("4").onclick = function () { changeColorIcon(4) };
document.getElementById("5").onclick = function () { changeColorIcon(5) };


// ************************
// 2. CREAR FUNCIONES
// ************************

// 2.1 Colorear elementos

function changeColorIcon(x) {
  resetColorIcon();
  // CUIDADO! sólocargar el primer evento de colorear, no el del padre que resetea el color!
  event.stopPropagation();
  console.log("CHANGE COLOR!! ", x);
  for (var i = 1; i <= x; i++) {
    document.getElementById(i).classList.add("icon-color-2");
  }
}

// 2.2 Resetear elementos

function resetColorIcon() {
  console.log("RESET COLOR!! ");
  for (var i = 1; i <= 5; i++) {
    document.getElementById(i).classList.remove("icon-color-2");
  }
}