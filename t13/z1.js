let score1 = '';
let score2 = '';
let keyboard = {
    discount: true,
  name:`Клавіатура дротова Logitech G209 Prodigy USB `,
  reviews:204,
  price: 1399,
  image: `<img src="key.jpg"></img>`
}


let products = document.getElementById(`products`)
let product1 = `
		<div class="card">
			<div class="header">
				<div class="action">Акція</div>
			</div>
			
			<div class="card_image">
				${keyboard.image}
			</div>
			
			<div class="card_info">
				<div class="name">
					${keyboard.name}
				</div>
				
				<div class="reviews">
					${keyboard.reviews} відгуки
				</div>
				
				<div class="price">
					${keyboard.price}₴;
				</div>
			</div>
		</div>
	</div>
    `;
products.innerHTML = product1;

let keyboard1 = {
    discount: false,
  name:`Клавіатура Cougar Vantar`,
  reviews:6,
  price: 1285,
  image: `<img src="key2.jpg"></img>`
}


let product2 = `
		<div class="card">
			<div class="header">

			</div>
			
			<div class="card_image">
				${keyboard1.image}
			</div>
			
			<div class="card_info">
				<div class="name">
					${keyboard1.name}
				</div>
				
				<div class="reviews">
					${keyboard1.reviews} відгуки
				</div>
				
				<div class="price">
					${keyboard1.price}₴;
				</div>
			</div>
		</div>
	</div>
    `;
products.innerHTML = product1 + product2;
if(keyboard.price < keyboard1.price){
score1 = keyboard.price - keyboard1.price;
} else{
    score2 = keyboar1.price - keyboard.price
}
if(keyboard.discount = true){
 score1 = score1 + 100;

}
console.log(score1)
