console.log('hello world')
console.log('Fundamentos de algoritmo de computação')

function avaliaParidade (limiteSuperior) {
  for (let i = 0; i < limiteSuperior; i++) {
    if (i % 2 == 1) console.log(i+ "i é um numero impar");
    else console.log(i+ "i é um numero par");
    
  }
}

avaliaParidade(10);


// Evita duplicata de elementos

var mySet = new Set();
mySet.add(1);
console.log(mySet);
console.log("---------------------------");
mySet.add(1);
console.log(mySet);
console.log("---------------------------");
mySet.add(2);
console.log(mySet);
console.log("---------------------------");
mySet.add(3);
console.log(mySet);
console.log("---------------------------");
mySet.add(2);
console.log(mySet);
console.log("---------------------------");
mySet.add(4);
console.log(mySet);
console.log("---------------------------");
mySet.add(4);
console.log(mySet);
console.log("---------------------------");
mySet.add(4);
console.log(mySet);
console.log("---------------------------");


// 
