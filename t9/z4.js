let days = [`Пн`, `Вт` , `Ср` , `Чт` , `Пт` , `Сб` , `Нд`];
let mon = [1200, 1140, 1400, 1150, 1400, 2500, 2950];
let suma = 0;
let max = mon[0];
let min = mon[0]
let maxd = days[0];
let mind = days[0];
suma = 0;
for(i=0 ; i<7; i++){
    console.log(`${days[i]} - ${mon[i]}`);
    suma = suma  +mon[i]
}
for(i=0; i<7; i++){
    if(max < mon[i] ){
        max = mon[i];

    }
        if(min > mon[i] ){
            min = mon[i];
        }
        if(maxd < days[i] ){
            maxd = days[i];
        }
            if(mind > days[i] ){
                mind = days[i];
    }
}

console.log(`Загальний прибуток - ${suma} MAX прибуток - ${max} у ${maxd}
MIN - ${min} у ${mind}`);