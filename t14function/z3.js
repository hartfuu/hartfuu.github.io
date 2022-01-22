let user = {
name:`Петро`,
lastname:`Іванов`,
age: 14,
email:`petro007@gmail.com`,
city:`Львів`
}
let table = document.getElementById(`table`)
function showUser(){
table.innerHTML =`   <tr>
<td>${user.name}</td>
<td>${user.lastname}</td>
<td>${user.age}</td>
<td>${user.email}</td>
<td>${user.city}</td>
</tr>`

}
showUser()

function changeuserData(a, b, c, d, e){
    user.name = a;
    user.lastname = b;
    user.age = c;
    user.email = d;
    user.city = e;
    showUser()
}
