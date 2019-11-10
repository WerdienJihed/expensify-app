/********************************************/
/************* OBJET DESTRUCTURING **********/
/********************************************/



// const person = {
//     name: "jihed",
//     age: 23,
//     location: {
//         city: "djerba",
//         temperature: 50
//     }
// };

// const { name = "Anonymous", age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temperature: tem } = person.location;
// if (city && tem) {
//     console.log(`its ${tem} in ${city}.`);
// }





// const book = {
//     title: "ego is the enemy",
//     author: "ryan holiday",
//     publisher: {
//         name: "penguin"
//     }
// };

// const { name: publisherName = "self-published" } = book.publisher;
// console.log(publisherName); 


/********************************************/
/************* ARRAY DESTRUCTURING **********/
/********************************************/

const address = ["1299 S Juniper Street", "Philapelphia", "Pennsylvania", "19147"];
const [street, city, state, zid] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffe (hot)", "$2.00", "$2.50", "$2.75"];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}.`);