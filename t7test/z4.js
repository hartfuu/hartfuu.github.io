let masiv = [3, 6, 9];
let masiv2 = masiv.slice();
let score = [];
for(i=1; i<6; i++){
    let chislo = prompt(`Запишіть 5 чисел`) ;
    let chislo_num = Number(chislo);

if(masiv.indexOf(chislo_num) == -1){
    masiv.push(chislo_num);
 
}
else{
masiv[masiv.indexOf(chislo_num)] = `*`
score.push(chislo_num); 
}
}
console.log(masiv);
console.log(masiv2);
if(masiv.length <= 6){
    alert(`Ви виграли. Вгадані числа ${score}`);
}