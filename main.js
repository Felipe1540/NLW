function createGame(time1, hora, time2) {
  return `
    <li>
        <img src="./assets/icon-${time1}.svg" alt="">
        <strong>${hora}</strong>
        <img src="./assets/icon-${time2}.svg" alt="">
    </li>
    `
}

function createCard(data, dia, jogos) {
  return `
     <div class="card">
         <h2>${data} <span>${dia}</span></h2>
 
         <ul>
           ${jogos}                    
         </ul>                
     </div>
    `
}

document.querySelector("#app").innerHTML = `
 <header>
    <img src="./assets/logo.svg" alt="">   
 </header>
 <main id="cards">
    ${createCard(
      "24/11",
      "quinta",
      createGame("portugal", "13:00", "gana") +
        createGame("brasil", "16:00", "Servia")
    )}           
    ${createCard(
      "28/11",
      "segunda",
      createGame("brasil", "13:00", "Suiça") +
        createGame("portugal", "20:00", "uruguai")
    )}
    ${createCard("02/12", "sexta", createGame("brasil", "16:00", "camaroes"))}
 </main>
`
