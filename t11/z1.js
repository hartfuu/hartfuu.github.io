let list = document.getElementById(`list`);
let imya = ``;

for(i=0 ; i<3 ; i++){
let username = prompt(`Назвітся!`);
imya += `<li>${username}</li>`;
}



list.innerHTML = imya;
console.log(list);