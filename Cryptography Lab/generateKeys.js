
//returns random primes P and Q as an array
function generatePQ(){
    let primeArray = new Array();
    let pqArray = new Array();
    let k = 4;

    for (let n = 50; n < 100; n++){
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
    let e = 2;

    let ePossibilitiesArray = new Array();
    for (let i = e; i < totient; i++) {
        if (greatestCommonDivisor(e, totient) == 1) {
            ePossibilitiesArray.push(e);
            e++;
        } else {
            e++;
        }
    }

    let randomFromArray = getRandomInt(0, ePossibilitiesArray.length);
    e = ePossibilitiesArray[randomFromArray];

    document.write("e = " + e + "    ");

    return e;
}


function euclideExtended(e, totient){
    let euclidArray = Euclid_gcd(e, totient);
    
    document.write("euclidArray = " + euclidArray + "    ");

    return euclidArray;
}

//pretty positive this is where I went wrong
function computeD(euclidArray){
    let d = euclidArray[1];

    document.write("d = " + d + "    ");

    return d;
}

function computePrivateKey(euclidArray, totient){
    let privKey = euclidArray[0];

    if (privKey < 0){
        privKey = privKey + totient;
    }

    document.write("privKey = " + privKey + "    ");

    return privKey;
}
