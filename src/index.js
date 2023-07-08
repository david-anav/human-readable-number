// module.exports = function toReadable (number) {

// }
let units = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'Twelve'];
let dozens = 'ty';
let less20 = 'teen';
let hundred = 'hundred';

let  num= 1 ;
let count = num.toString()
// console.log(typeof(count))
if ( count.length <= 2 && num <= 12) {
    console.log(units[num-1]);
}
// if (num.length === 2) {

// }
// if  ( num.length === 3) {

// }
