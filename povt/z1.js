let main = document.getElementById(`main`);
let car1 = {
image:"<img src=a1.jpg>",
name : "ЗАЗ 1102 Таврія 1993",
price : 1300,
color:  "Червоний",
dist: 190
}
let car2 = {
    image:"<img src=a2.jpg>",
    name : "Opel Astra H 2008",
    price : 6450,
    color:  "Сірий",
    dist: 180
    }

    let car3 = {
        image:"<img src=a3.jpg>",
        name : "Ford Fusion SE 2016",
        price : 13449,
        color:  "Білий",
        dist: 31
        }

let cars = `<div class="car">
${car1.image}
<h2 aign="center">${car1.name}</h2>
 <h3 align="center">${car1.price}$</h3>
 <h4 align="center">Колір - ${car1.color}</h4>
<h4 align="center">Пробіг ${car1.dist} тис. км</h4>
  </div>`  ;

cars +=  `<div class="car">
${car2.image}
<h2 aign="center">${car2.name}</h2>
 <h3 align="center">${car2.price}$</h3>
 <h4 align="center">Колір - ${car2.color}</h4>
<h4 align="center">Пробіг ${car2.dist} тис. км</h4>
  </div>`  ;


  cars +=  `<div class="car">
${car3.image}
<h2 aign="center">${car3.name}</h2>
 <h3 align="center">${car3.price}$</h3>
 <h4 align="center">Колір - ${car3.color}</h4>
<h4 align="center">Пробіг ${car3.dist} тис. км</h4>
  </div>`  ;
  main.innerHTML = cars;
 