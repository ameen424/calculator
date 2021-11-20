let companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  let ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  
  // forEach
  
  companies.forEach(function(company) {
    console.log(company.name);
  });
  
  // filter
  /* Both codes gives the same output that the person
   age > 21 can only take the drink*/
  // Get 21 and older
  
//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//       canDrink.push(ages[i]);
//     }
//   }

 
  
  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true;
  //   }
  // });
  
  let canDrink = ages.filter(age => age >= 21);
  console.log(canDrink)
  
  // Filter retail companies
  
  /* both the arrow function and fuction gives the same output */

//   let retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//        return true;
//      }
//  });

 
  
  let retailCompanies = companies.filter(company => company.category === 'Retail');
  
  console.log(retailCompanies)
  // Get 80s companies
  
  let eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  console.log("80s companies")
  console.log(eightiesCompanies)
  
  // Get companies that lasted 10 years or more
  
  let lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  console.log("lasted 10 years")
  console.log(lastedTenYears)
  
  // map
  

  let companyNames = companies.map(function(company) {
    return company.name;
  });
  console.log("company names")
  console.log(companyNames)
  
//   let testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
//   });
  console.log("company start and end ")
  

  let testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  
  console.log(testMap)

/*both the codes gives same output */

//   let agesSquare = ages.map(age => Math.sqrt(age))
//   console.log(agesSquare)
//   let ageTimes = ages.map(age => age * 2)
//   console.log(ageTimes)


let ageMap = ages
     .map(age => Math.sqrt(age))  
     .map(age => age * 2);
// first it get sqrt vale and then multiplied with 2
console.log(ageMap)
  
  
  // sort
  
  // Sort companies by start year
  
//   let sortedCompanies  = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });

  
  
  let sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
  console.log(sortedCompanies)
  // Sort ages
  let sortAges = ages.sort((a, b) => a - b);
  
  console.log("sorted ages ")
  console.log(sortAges);
  
  
  // reduce

/* all  the code gives same output(total sum of age)*/

//   let ageSum = 0;
//   for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
//   }
  
  
//   let ageSum = ages.reduce(function(total, age) {
//     return total + age;
//   }, 0);

 
  
let ageSum = ages.reduce((total, age) => total + age, 0);

console.log("sum of ages : " +ageSum)
  
  // Get total years for all companies

  /* both codes give same output */
//   let totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
//   }, 0);

  
  
  let totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
  console.log("Total years of all company : " +totalYears)
  

  
  
  