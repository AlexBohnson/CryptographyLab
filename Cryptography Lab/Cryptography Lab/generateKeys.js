
//returns random primes P and Q as an array
function generatePQ(){
    let primeArray = new Array();
    let pqArray = new Array();
    let k = 4;

    //using small numbers to help calculate d
    //large primes give NaN
    for (let n = 3; n < 11; n++){
        if (isPrime(n, k)){
            primeArray.push(n);
        }
    }


    let randInt1 = getRandomInt(0, primeArray.length - 1);
    pqArray.push(primeArray[randInt1]);
    let randInt2 = getRandomInt(0, primeArray.length - 1);
    pqArray.push(primeArray[randInt2]);


    document.write("pqArray = " + pqArray + "    ");

    return pqArray;

}


function generateN(pqArray){
    document.write("n = " + pqArray[0] * pqArray[1] + "    ");

    return pqArray[0] * pqArray[1];
}

function generateTotient(pqArray){
    document.write("totient = " + (pqArray[0] - 1)*(pqArray[1] - 1) + "    ");

    return (pqArray[0] - 1)*(pqArray[1] - 1);
}

//generates array of possible totients and returns a random one
function generateE(totient){

    let ePossibilitiesArray = new Array();
    for (let i = 2; i < totient; i++) {
        if (egcd(i, totient)[0] == 1) {
            ePossibilitiesArray.push(i);
        }
    }

    let randomFromArray = getRandomInt(0, ePossibilitiesArray.length - 1);
    let e = ePossibilitiesArray[randomFromArray];

    document.write("e = " + e + "    ");

    return e;
}


function euclideExtended(e, totient){
    let euclidArray = egcd(e, totient);
    
    document.write("euclidArray = " + euclidArray + "    ");

    return euclidArray;
}

//pretty positive this is where I went wrong
function computeD(e, totient){
    let k = egcd(e, totient)
    
    let d = k[1];

    if (d < 0){
        d += totient;
    }
    document.write("d = " + d + "    ");

    return d;
}