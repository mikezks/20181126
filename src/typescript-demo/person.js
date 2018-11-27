class Person {
}
class Passenger extends Person {
}
class Pilot extends Person {
}
let person1 = new Passenger();
person1.firstname = 'Markus';
person1.lastname = 'Traveller';
let person2 = new Pilot();
person2.firstname = 'Mary';
person2.lastname = 'Superstar';
let personCache = [];
person2.licenseNumer = '326378238';
personCache.push(person1);
personCache.push(person2);
console.log(personCache);
console.log(personCache[1] instanceof Pilot);
let personPilotPassenger;
let pilotPassenger = Object.assign({}, person1, { lastname: 'Huber', licenseNumer: '', passengerStatus: '' });
console.log(pilotPassenger);
