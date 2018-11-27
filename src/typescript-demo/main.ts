import { Person, Passenger, Pilot } from './person';
import { Flight, FlightManager } from './flight';

const peter = new Person();
peter.firstname = 'Peter';
peter.lastname = 'Pan';
peter.age = 13;

/**
 * TypeScript Compiler Error, but valid JavaScript.
 */
// peter.age = 'very old!';

console.log(peter);


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

let flights: Array<Flight> = [
    { 
      id: 17,
      from: 'Graz',
      to: 'Hamburg',
      date: '2017-02-27'
    },
    { 
      id: 18,
      from: 'Graz',
      to: 'Hamburg',
      date: '2017-02-27'
    },
    { 
      id: 19,
      from: 'Graz',
      to: 'Mallorca',
      date: '2017-02-27'
    },
    { 
      id: 20,
      from: 'Graz',
      to: 'Hamburg',
      date: '2017-02-27'
    }
  ];

const fm = new FlightManager(flights);

console.log(fm.search('Graz', 'Hamburg'));