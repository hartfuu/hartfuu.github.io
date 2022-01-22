let name = document.getElementById(`name_user`);

let imya = prompt(`Як Вас звати?`)
let mail = prompt(`Ваша пошта?`)
let password = prompt(`Введіть пароль`)
if(password == `1111`){
name.innerHTML = `<a=""> ${imya} </a>`; 
let greatings2 = document.getElementById(`greatings`);
greatings2.innerHTML = `Вітаю , ${imya}! На вашу скриньку<br> ${mail} відправлено лист із підтвердженням`;
}else{
text.innerHTML = `Пошта або пароль не правильний`

}
console.log(name);