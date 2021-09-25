let score = 0;
let q1 = prompt('мова України? & la langue de lUkraine ? ');
let q2 = confirm('Небо синього кольору? & Le ciel est bleu?');
let q3 = prompt('де знаходиться Ubisoft Kiev & où se trouve Ubisoft Kiev');
let q4 = confirm('столиця Франції Париж & la capitale de la France est Paris')
if(q1==`українська` || q1 == `ukrainien`){
  score=score+1  ;
}else { 
};
if(q2==true){
    score=score+1  ;
  }else{
  };
  if(q3==`Київ` || q3 == Kiev){
    score=score+1  ;
  }else {
  };
  if(q4==true){
    score=score+1  ;
  }else {
  };

alert(`ви відповіли на ${score} питань?`);