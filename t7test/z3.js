let masiv = [];
let sproba = 3;
for(i=1; i<6; i++){
    masiv.push(prompt(`Запишіть 5 числ `));
}
for(i=1; i<4; i++){
let s = prompt(`Введіть якесь число`);
if(masiv.indexOf(s) != -1){
alert(`Ви молодець!`);
}else{if(masiv.indexOf(s) == -1)
alert(`У вас залишилось  спроби`);
}
}