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

//passes totient or no? rn is yes. Do I want this to do all previous steps? no.
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

    //e is getting really large and returning infinity when calculating cipher.
    //3 is a test value
    //e = 3;
    document.write("e = " + e + "    ");

    return e;
}

function euclideExtended(e, totient){
    let euclidArray = egcd(e, totient);
    
    document.write("euclidArray = " + euclidArray + "    ");

    return euclidArray;
}

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


//This function borrowed from
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//10-16-22
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//This function borrowed from
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-47.php
//10-16-22
function Euclid_gcd(a, b) {
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
      return [NaN, NaN, NaN];
    }
    
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
      return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
      return false;
    }
    var signX = (a < 0) ? -1 : 1,
      signY = (b < 0) ? -1 : 1,
      x = 0,
      y = 1,
      u = 1,
      v = 0,
      q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a !== 0) {
      q = Math.floor(b / a);
      r = b % a;
      m = x - u * q;
      n = y - v * q;
      b = a;
      a = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }
    return [b, signX * x, signY * y];
  }


//https://brilliant.org/wiki/extended-euclidean-algorithm/
//10-16-22
  function greatestCommonDivisor(m, n)
{
    if(n == 0) return m;

    return greatestCommonDivisor(n, m % n);
}