
const nome = document.getElementById("texto")

const API_KEY = "08edfd856b7548e5b049a2e6c0442089"

const results = document.getElementById("results");

const botao = document.getElementById("buscar")

const filtroNota = document.getElementById("rating")
const filtroAno = document.getElementById("year")




async function buscarJogos() {
  const termo = nome.value
  const URL = `https://api.rawg.io/api/games?search=${termo}&key=${API_KEY}`

  const response = await fetch(URL)
  if (response.status === 200) {
    const objeto = await response.json();
    console.log(objeto)

    objeto.results.forEach(game => {
      const card = document.createElement("div");
      card.classList.add("card");

      if (filtroNota.value === "") {

      } else if (filtroNota.value === "4") {
        if (game.rating < 4) {
          return;

        }
      } else if (filtroNota.value === "3") {
        if (game.rating < 3) {
          return;
        }
      } else {
        if (game.rating < 2) {
          return;
        }
      }

      if (filtroAno.value === "") {

      } else if (filtroAno.value === "2024") {

        if (Number(game.released.slice(0, 4)) < 2024) {
          return;

        }
      } else if (filtroAno.value === "2023") {

        if (Number(game.released.slice(0, 4)) < 2023) {
          return;
        }
      }
      else if (filtroAno.value === "2022") {

        if (Number(game.released.slice(0, 4)) < 2022) {
          return;
        }
      }else if (filtroAno.value === "2020") {

        if (Number(game.released.slice(0, 4)) < 2020)
          return;
      } else {

        if (Number(game.released.slice(0, 4)) < 2015)
          return;
      }


      card.innerHTML = `
          <img src="${game.background_image}">
          <h3>${game.name}</h3>
          <p>⭐ <strong>${game.rating}</strong></p>
          <p>📅 ${game.released?.slice(0, 4)}</p>
        `

      results.appendChild(card);

    })


  }

}
botao.addEventListener("click", buscarJogos);

// ⌨️ Enter no input
nome.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buscarJogos();
  }
});



nome.addEventListener("input", verificarTexto);

function verificarTexto() {
  if (nome.value === "") {
    results.innerHTML = "";
  }
}


