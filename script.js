// https://restcountries.com/v3.1/name/{name}?fullText=true
let searchBtn = document.getElementById("search-btn");
let countryName = document.getElementById("country-inp");
let display = document.getElementById('result')

searchBtn.addEventListener("click", (e) => {
  let country = countryName.value;
  let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  console.log(url);
  fetch(url).then((res)=>{
    res.json().then(data => {
      console.log(data[0])
      console.log(data[0].capital[0])
      console.log(data[0].flags.svg)
      console.log(data[0].name.common)
      console.log(Object.values(data[0].languages))
     
      display.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
      <h1 class=countryName>${data[0].capital[0]}</h1>`;
    })
  })
  
});
