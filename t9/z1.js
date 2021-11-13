let masiv = [3, 7, 8, 2, 9, 1];
let max = masiv[0];
let min = masiv[0]
for(i=0; i<masiv.length; i++){
if(max < masiv[i] ){
    max = masiv[i];
}
    if(min > masiv[i] ){
        min = masiv[i];
    }
}

console.log(`числа масиву ${masiv}
MAX - ${max} 
MIN - ${min}`);
