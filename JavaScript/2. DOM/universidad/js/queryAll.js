//query selector all
let enlaces;

//selecciona todo no solo la primera ocurrencia
enlaces = document.querySelectorAll("#principal a:nth-child(odd)"); //solo  los impares

enlaces.forEach(function (impar) {
  impar.style.color = "red";
});
console.log(enlaces);
