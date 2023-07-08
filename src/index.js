// module.exports = function toReadable (number) {

// }
let units = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', ''];
let dozens = [ 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
let hundred = 'hundred';

let  num= 7 ;
let count = num.toString()
console.log(typeof(count))
if ( count.length=== 1 ) {
    console.log(units[num-1]);
}
// if (num.length === 2) {

// }
// if  ( num.length === 3) {

// }
