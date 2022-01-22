let masiv = [];
let p1 = prompt('Гравець 1 , назвіть себе');
let p2 = prompt('Гравець 2 , назвіть себе');
alert(`Правила гри : ${p1} вписує числа , ${p2} вгадує числа`)
for(i=1; i<6; i++){
masiv.push(prompt(` ${p1} , загадайте число`));
}
alert(`передайте телефон ${p2}`)
for(i=8; i>7; i++){

let answer = prompt(`${p2}, спробуйте вгадати число від 1 до 20`);
if(masiv.indexOf(answer) == -1){
alert('Ви програли');
}
else{
alert('Ви виграли ');
break;
}
}
console.log(masiv);
