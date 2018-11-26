function add(a, b) {
    console.debug('Result', a+b);
}

add(2, 3);

var myVariable = 'Hello World!';
console.log(myVariable);
myVariable = 9;
console.log(myVariable);

document.getElementById('js-output').innerHTML = 'my javascript value';

var resultFn = add;
var result = add(1, 2);

console.log(resultFn(5, 4));