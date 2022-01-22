let tprice = 0;
let c = 0;
let a  = confirm(`Починаємо` );
while(a == true){
let u   =  Number(prompt(`Введіть ціну  `));
      a = confirm(`продовжити покупку?`);
        tprice = tprice + u ; 
        c++ 
    }
   console.log(`до сплати ${tprice}₴ . кількість товарів ${c} середня ціна покупки ${tprice/c}`);