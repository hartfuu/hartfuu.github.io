let month = document.getElementById(`month`);
let days = ` `;
let monthname = prompt('Запитайте місяць')
let zag  = document.getElementById
zag.innerText = `Каландар для місяця ${monthname}`

for(i=1; i<32; i++){
    if(i % 7 == 0 || (i+1) % 7 == 0){
days += `    <div class = "day weeknd">${i}<br> ${monthname} </div>`;
    }else{days += `<div class = "day">${i}<br> ${monthname}</div>`;
}
}
month.innerHTML = days ; 