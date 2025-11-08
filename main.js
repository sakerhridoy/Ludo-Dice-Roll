// let upperValue = 6
// let lowerValue = 1
// let resultValue = Math.ceil(Math.random() * upperValue);
// console.log(resultValue);
function rollDice() {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let imgSrc ='img/'+ randomNum + '.png';
  let ludo = document.getElementById('ludo');
  ludo.src = imgSrc;
}