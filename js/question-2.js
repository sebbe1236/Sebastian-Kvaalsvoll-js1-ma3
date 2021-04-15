const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const display = document.querySelector(".display-results");

async function gamesResults() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const gamesTotal = result.results;
    display.innerHTML = "";
    for (let i = 0; i < gamesTotal.length; i++) {
      if (i === 8) {
        break;
      }

      display.innerHTML += `<div>${gamesTotal[i].name}<div>
      <div>${gamesTotal[i].rating}</div>
      <div>${gamesTotal.length}</div>
        
        
        `;
    }
  } catch (error) {
    display.innerHTML = `<div> An error happened</div>`;
  }
}

gamesResults();
