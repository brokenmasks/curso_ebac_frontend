const corpo = document.getElementById("corpo");
const titulo = document.getElementById("titulo");

titulo.addEventListener("click", function() {
    corpo.classList.toggle('bg');
});