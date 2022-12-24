const weekly = {
  mon: 17.45, 
  tue: 34.91,
  wed: 52.36,
  thu: 31.07,
  fri: 23.39,
  sat: 43.28,
  sun: 25.48
}
const dailyCost = Object.values(weekly);
let weeklyCost = 0
dailyCost.forEach(daily => {
    weeklyCost += daily;
})
let dailyPercent = dailyCost.map(daily => daily/weeklyCost)

const graph = document.querySelector('[data-graph]')
let graphHeight = graph.clientHeight
console.log(graphHeight);

const columns = document.querySelectorAll("[data-days]")
const Columns = [...columns]
const columnContent = document.querySelectorAll("[data-info]")
const ColumnContent = [...columnContent]
console.log(Columns, ColumnContent);

for (let i = 0; i < Columns.length; i++) {
   Columns[i].style.height = `${graphHeight * dailyPercent[i]*3}px` ;
   console.log(Columns[i].style.height);
}

for (let i = 0; i < ColumnContent.length; i++) {
    ColumnContent[i].innerText = `$${dailyCost[i]}`;
}

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseout", () => {
        columnContent[i].classList.toggle("hidden")
    })
    
    columns[i].addEventListener("mouseover", () => {
        columnContent[i].classList.toggle("hidden")
    })
}