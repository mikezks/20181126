class Person {
    firstname: string;
    lastname?: string;
    age?: number;
}

class Passenger extends Person {
    passengerStatus: string;
}

class Pilot extends Person {
    licenseNumer: string;
}

let person1: Person = new Passenger();
person1.firstname = 'Markus';
person1.lastname = 'Traveller';

let person2: Person = new Pilot();
person2.firstname = 'Mary';
person2.lastname = 'Superstar';

let personCache: Person[] = [];
(person2 as Pilot).licenseNumer = '326378238';
personCache.push(person1);
personCache.push(person2);

console.log(personCache);
console.log(personCache[1] instanceof Pilot);

let personPilotPassenger: Array<Person | Pilot | Passenger>;
let pilotPassenger: Pilot & Passenger = {
    ...person1,
    lastname: 'Huber',
    licenseNumer: '',
    passengerStatus: '',
};

console.log(pilotPassenger);
