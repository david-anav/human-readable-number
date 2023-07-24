// function dz(number){
//     return Math.trunc((number%100)
// }
const units = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const shablTy = 'ty'; /*60*/
const dozens = [ 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];
const less20 = 'teen';   /*19*/
const hundred = 'hundred';
module.exports = function toReadable (number) {


    let count = number.toString()
    if (number === 0 ){
        return ('zero');
    }
    if (count.length <= 2) {
        if (number <= 12) {
            return (units[number-1]);
        }else if (number > 12 && number < 20 && number !==14){
            return (`${dozens[number%10-2]}${less20}`);
        }else if ( number === 14){
            return (`${units[3]}${less20}`)
        }else if(number>=20 && number<=99 ){
            if(number%10 === 0){
                return (`${dozens[number/10-2]}${shablTy}`)
            }else if(number%10!==0){
                return (`${dozens[Math.trunc(number/10)-2]}${shablTy} ${units[number%10-1]}`)
            }
        }
    }else if (count.length === 3){
        if (number%100 === 0){
            return (`${units[(number/100)-1]} ${hundred}`)
        }else if(number%100 !==0){
            if (number%100 <= 12) {
                return (`${units[Math.trunc(number/100)-1]} ${hundred} ${units[number%100-1]}`);
            }else if ( number%100 === 14 ){
                return (`${units[Math.trunc(number/100)-1]} ${hundred} ${units[3]}${less20}`)
            }else if (number%100 > 12 && number%100 <20 ){
                return (`${units[Math.trunc(number/100)-1]} ${hundred} ${dozens[(number%100)%10-2]}${less20}`)
            }else if ( number%100 >=20 && number%100%10 ===0){
                return (`${units[Math.trunc(number/100)-1]} ${hundred} ${dozens[(number%100)/10-2]}${shablTy}`)
            }else if ( number%100 >=20 && number%100%10 !==0) {
                return (`${units[Math.trunc(number/100)-1]} ${hundred} ${dozens[Math.trunc((number%100)/10)-2]}${shablTy} ${units[number%100%10-1]}`)
            }
        }
    }
}
// console.log(toReadable(914))
// let  number= 941;
