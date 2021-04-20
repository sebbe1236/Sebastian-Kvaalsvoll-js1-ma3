const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=caec4f107e1e4805acf26113ca8989b8";

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
      
        `;
    }
    {
      display.innerHTML += `${".display-results".length}`;
    }
  } catch (error) {
    display.innerHTML = `<div> An error happened</div>`;
  }
}

gamesResults();

//https://stackoverflow.com/questions/8868741/find-number-of-element-in-string-with-jquery
