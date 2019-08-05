//
// Object destructuring
//
const person = {
    name: 'Amanuel',
    age: 30,
    location: {
        city: 'Asmara',
        temp: 40
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const address = ['112 S Juniper Street', 'Philadelphia', 'Penssylavania', '1940'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);