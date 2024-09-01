// node arraytask.js

// task number-1

const fruits = ["Benana", "pepe", "Apple", "orange", "dragon"]
// console.log(fruits[3]);
// ans: orange

fruits[2] = "Jambura"
// console.log(fruits);

//....................................//

// task number-2 
// node arraytask.js

const tourist = ["bandarbon", "coxbazar", "sundorbon"]
tourist.push("Sonargaon");
tourist.push("panamcity", "ciriakhana");
tourist.pop();
// console.log(tourist);


//....................................//

// task number-3 
// node arraytask.js

const Book = ["English Book", "Bangla Book", "Math Book", "joks Book",]
const finalyBook = Book.includes("javascript book")
// console.log("Amr ei Array Modde ei book holo " + finalyBook+ " mane akhane nai");

//....................................//

// task number-4 
// node arraytask.js

const khabar = ["Rice", "Wather", "fish", "chiken"];
const nom = 50;
const person = "Azmir Khan"
const price = [50, 451, 887612, 54, 5, 656, 656, 542, 586,]

//  console.log(Array.isArray(nom));
if (Array.isArray(nom)) {
    console.log("he ata array");
}

else if (Array.isArray(khabar)) {

    // console.log("he Atai Array");
}

else {
    console.log("array na");
}



//....................................//

// task number-5 
// node arraytask.js

const ary = ["Ami", "Azmir", "Uddin", "Akjon"];
const ary2 = ["front", "end", "Developer"];
const con = ary.concat(ary2);
console.log(con);




