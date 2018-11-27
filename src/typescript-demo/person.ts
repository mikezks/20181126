export class Person {
    firstname: string;
    lastname?: string;
    age?: number;
}

export class Passenger extends Person {
    passengerStatus: string;
}

export class Pilot extends Person {
    licenseNumer: string;
}
