function calculateBill(units) {
  if (units <= 100) {
    return units * c1;
  } else if (units <= 200) {
    return units * c2;
  } else if (units <= 300) {
    return units * c3;
  } else if (units > 300) {
    return units * c4;
  }
}

let c1, c2, c3, c4;
const calc = () => {
  let units = document.getElementById("units").value;
  let state = document.getElementById("states").value;
  switch (state) {
    case "AP":
      c1 = 2.6;
      c2 = 5.4;
      c3 = 7.1;
      c4 = 7.95;
      break;

    case "TA":
      c1 = 3.3;
      c2 = 4.3;
      c3 = 7.2;
      c4 = 8.5;
      break;
    case "KA":
      c1 = 5.2;
      c2 = 6.75;
      c3 = 7.8;
      c4 = 8.2;
      break;
  }
  let bill = calculateBill(units);
  console.log(bill);
  document.getElementById("bill").innerHTML = bill;
};
