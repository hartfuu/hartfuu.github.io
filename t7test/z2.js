let masiv = [];
let p1 = prompt(`Запишіть 10 числ `);
for(i=1; i<10; i++){
    masiv.push(prompt(`Запишіть 10 числ `));
}
let del = prompt(`Введіть кількість чисел які потрібно видалити`);
let d = Number(del);
for(i=0; i<d; i++){
if(d == 1){
    
    masiv.pop(masiv);

}
else{if(d == 2){
    masiv.pop(masiv);
    masiv.pop(masiv);
}
}
}
console.log(masiv);