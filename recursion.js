// !Рекурсия урок Петриченко

function pow(x,n) {
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

function pow(x,n){
    if(x === 1){
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2,3));

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],

    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
    semi: {
       students: [{
         name: 'Test',
         progress: 100
       }]
    }
  },
};

function getTotalProgressByLoop(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }
  return total / students;
}

console.log(getTotalProgressByLoop(students));


function getTotalProgressByRecursion(data){
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length]; 
} else {
  let total = [0,0];

  for(let subData of Object.values(data)) {
    const subDataArr = getTotalProgressByRecursion(subData);
    total[0] += subDataArr[0];
    total[1] += subDataArr[1];
  }
  return total;
}

}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);



//!DevSage lesson

function processDoll (doll) 
{
  if('True'){
    return 'Youm yom';
  } else {
    processDoll(`the smaller ${doll}`);
  }
}

console.log(processDoll("Whot is this?"));


function factorial(n) {
  if ( n == 1 || n == 0){
    return 1;
  } else {
    return n * factorial(n -1);
  }
} 

console.log(factorial(5));

// ! Recursion tutorial

const countToTen = (num = 1) => {
  while(num <= 10){
    console.log(num);
    num++;
  }
};

countToTen(3);



//? Пример с рекурсией цикла
const recurToTen = (num = 1) => {
  if(num > 10) return;
  console.log(num);
  num ++;

  recurToTen(num);
};


recurToTen();



//? Пример фибоначчи 
const fibonacci = (num , array = [0, 1]) => {
  while(num > 2){
    const[netToLast ,last] = array.slice(-2);
    array.push(netToLast + last);
    num -= 1;
  }
  return array;
};

console.log(fibonacci(12));

//? С рекурсией 
const fib = (num, array = [0,1]) => {
  if(num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num -1,[...array, nextToLast + last] );
};

console.log(fib(12));



// ! Лущенко Александр recursion  => Просто машина а не учитель.

let t = 0;
function f1 (){
  t++;
  console.log(t);
  if (t === 100) return;
  f1();
}

f1();

//* F1 циклом
function f2 (){
  let out = '';
  for(let i = 1; i <= 30; i ++){
    out += i + ' ';
  }
  console.log(out);
}

f2();

//* Рекурсией
let i = 0;
let out = '';

function f3(){
  i++;
  out += i + ' ';
  if (i >= 30) return;
  f3();
}

f3();
console.log(out);


function randomInteger(min, max){
    let rand = min + Math.random() *(max + 1 - min);
    return Math.floor(rand);
}

let s1 = 0;

function moneyRecursion(){
    let m = randomInteger(0,100);
    console.log('add ' + m);
    s1 += m + randomInteger(1,100);
    console.log('sum ' + s1);
    if(s1 > 300) return;
    moneyRecursion();
}

moneyRecursion();


// FACTORIAL

function factorial(n){
    let s = 1;
    for (let i = 1; i <= n; i++){
        s = s * i;
    }
    console.log(s);
}

factorial(5);

let s = 1;
function fackt2(n){
  if(n === 0) return;
  s = s * n;
  fackt2(n - 1);
}

fackt2(5);

console.log(s);