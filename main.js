let card = document.querySelector(".cardRow");
let input = document.querySelector(".inp");

axios.get("https://restcountries.com/v3.1/all").then((res) => {
  for (let i = 0; i < res.data.length; i++) {
    card.innerHTML += `
        <div class="col-3 dataCard">
        <div class="card mt-5" style="width: 18rem;">
        <img src="${res.data[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${res.data[i].name.common}</h5>
          <p class="card-text">${res.data[i].population}</p>
        </div>
      </div>
        </div>
        `;
  }
});

// filter

input.addEventListener("keyup", function () {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    card.innerHTML = "";

    for (let i = 0; i < res.data.length; i++) {
      if (
        res.data[i].name.common.toLowerCase().includes(input.value.toLocaleLowerCase())
      ) {
        card.innerHTML += `
                <div class="col-3 dataCard">
               <div class="card mt-5" style="width: 18rem;">
        <img src="${res.data[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${res.data[i].name.common}</h5>
          <p class="card-text">${res.data[i].population}</p>
        </div>
      </div>
        </div>
                `;
      }
    }
  });
});