const head = require('../head.js');
const assertEqual = require('../assertEqual.js'); 

assertEqual(head(5), 5);
assertEqual(head([3,5,4]), 5);