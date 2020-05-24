/*const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Anna", "Jack", "Alex", "Ali"])
    }, 3000);

    setTimeout(() => {
      reject("data rejected from the server");
    }, 5000);
});


const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Babel", "Jill", "Fall", "Green"]);
  }, 3000);

  setTimeout(() => {
    reject("data rejected from the server");
  }, 5000);
});
*/
/*
promise.then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
})
*/
/*
Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data
    for(var i = 0; i < names.length; i++) {
        const name = names[i]
        const surname = surnames[i];
        console.log(`${surname} ${name}`)
    }
}).catch(error => {
    console.log(error)
})*/



/*
const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Anna", "Jack", "Alex", "Ali"]);
    }, 1000);

    setTimeout(() => {
        reject(["we need data"]);
    }, 4000);
});

const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Babel", "Jill", "Fall", "Green"]);
  }, 1000);

  setTimeout(() => {
    reject(["we need data"]);
  }, 4000);
});

Promise.all([namesPromise, surnamesPromise]).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})

*/


/*
function factorial(number) {
  let product = 1;
  for (let i = number; i >= 1; i--) {
    //calculating iterator just takes the answer of the previous calc
    //multiplied by the new iterator i.e
    //product = 5 * i = 6 === 30
    //product is now 30
    //product = 30 * i = 4
    console.log(product *= i);
  }
  return product
}

console.log(factorial(6))
*/
/*
function factorial(number) {
  if (number == 1) {
    return  number;
  } else {
    return number * factorial(number-1)
  }
}

console.log(factorial(6))
*/

//banking in oop
/*

class Checking {
  constructor(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    switch (amount) {
      case amount <= this.balance:
        this.balance -= amount;
        break;
      case amount > this.balance:
        return "Insufficient funds";
        break;
      default:
        return amount;
        break;
    }
  }

  toString() {
    return "Balance: " + this.balance
  }
}

var account = new Checking(1000)
account.deposit(500)
console.log(account.toString())
account.withdraw(750)
console.log(account.toString())
account.withdraw(800)
console.log(account.toString())

*/
/*
class weekTemps {
  constructor() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
  }
  

  add(temp) {
    this.dataStore.push(temp);
  }

  average() {
    var total = 0;
    for(var i = 0; i < this.dataStore.length; i++) {
      total += this.dataStore[i];
    }
    return total / this.dataStore.length
  }
}


var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average());*/

/*
class weekTemps {
  constructor() {
    this.letter = [
      "function for adding a grade and a function",
      "Store a set of words in an array and display",
      "Create functions to display",
    ];
  }

  average() {
    for (const i of this.letter) {
      var NewList = i.split(" ")
      for (const j of NewList) {
        console.log(j)
      }
    }
    
  }

}

var thisWeek = new weekTemps()

thisWeek.average()
*/

/*
function List() {
 this.listSize = 0;
 this.pos = 0;
 this.dataStore = []; // initializes an empty array to store list elements
 this.clear = clear;
 this.find = find;
 this.toString = toString;
 this.insert = insert;
 this.append = append;
 this.remove = remove;
 this.front = front;
 this.end = end;
 this.prev = prev;
 this.next = next;
 this.length = length;
 this.currPos = currPos;
 this.moveTo = moveTo;
 this.getElement = getElement;
 this.length = length;
 this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element
}


function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1; 
}

const dele = new List()

dele.append("dele")
dele.append("bode")
dele.append("dapo")
dele.append("ifi")
dele.find("dele")
*/


/*

let sign = "#";
let result = 1;
for (let i = 1; i <= 7; i++) {
  sign = sign + i
  console.log(sign)
}
*/

/*
for(let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz")
  } 
  if(i % 5 === 0) {
    console.log("Buzz")
  }
  if(i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz")
  }
  else {
    console.log(i)
  }
}
*/


/*

const human = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      return unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  }
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}*/

/*
if (future() === null || future() === undefined) {
  console.log("the future says: ", "nothing");
}else {
  console.log("the future says: ", future());
}

function future() {
  return "you'll never have flying cars"
}
*/



/*
function printFarmInventory(cows, chicken) {
  let cowString = String(cows);
  while(cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`)
  let chickenString = String(chicken);
  while(chickenString.length < 3) {
    chickenString = "0" + chickenString
  }
  console.log(`${chickenString} Chickens`)
}

printFarmInventory(7, 11);

*/


/*

function sum(...numbers) {
  let result = 0;
  for(let i of numbers) {
    result += i
  }
  return result
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))
*/






