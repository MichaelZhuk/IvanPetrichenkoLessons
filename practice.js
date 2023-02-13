

 function landPerimeter(arr) {

 }

let far =  'ave';

for (const char of far ){
    if(char == 'a' ){
    console.log(char);
    }
}



let resultX = '';
let resultO = '';


 for (const char of lands[0]){
    if (char == 'X'){
       resultX = resultX + char;
    } else { 
       resultO = resultO + char;
    }
 }

console.log(resultX);
console.log(resultO);





let lands = [
 'XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO'];


function landPerimeter(arr) {
    let countOfX = 0;
    let countOfNeighbors = 0;
  
    const arrStringSize = arr[0].length;
    const newArr = arr.join("");
  
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === "X") {
        countOfX++;
        if (newArr[i + 1] === "X" && (i + 1) % arrStringSize !== 0) {
          countOfNeighbors++;
        }
        if (newArr[i + arrStringSize] === "X") {
          countOfNeighbors++;
        }
      }
    }
    return `Total land perimeter: ${countOfX * 4 - countOfNeighbors * 2}`;
  }

