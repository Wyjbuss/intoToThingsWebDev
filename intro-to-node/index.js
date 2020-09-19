const suh = require("superheroes");
const supervillains = require('supervillains');

var mySupName = suh.random();
var myVilName = supervillains.random();

console.log('Hero Name: ' + mySupName);
console.log('Villan Name: ' + myVilName);
