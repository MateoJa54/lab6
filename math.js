function EsPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = EsPrimo;

function EsPerfecto(num){
    let suma = 0;
    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            suma += i;
        }
    }
    return suma === num;    
}
module.exports = EsPerfecto;