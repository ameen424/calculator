let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  fetch("https://corona.lmao.ninja/v2/countries")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let results = document.getElementById("results");
      let template = `
        <h4 class="mt-4">covid cases </h4>`;

      data.forEach((element) => {
        template += `
         <ul class="list-group mb-4">
            <li class="list-group-item"><strong>Country: </strong>${element.country}</li>
            <li class="list-group-item"><strong>Cases: </strong>${element.cases}</li>
            <li class="list-group-item"><strong>Deaths: </strong>${element.deaths}</li>
         </ul>
            `;
      });
      results.innerHTML = template;
    });
});
