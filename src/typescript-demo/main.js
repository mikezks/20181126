const peter = new Person();
peter.firstname = 'Peter';
peter.lastname = 'Pan';
peter.age = 13;
/**
 * TypeScript Compiler Error, but valid JavaScript.
 */
// peter.age = 'very old!';
console.log(peter);
