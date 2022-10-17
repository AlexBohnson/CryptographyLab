



let pqArray = generatePQ();
let n = generateN(pqArray);
let totient = generateTotient(pqArray);
let e = generateE(totient);
let euclidArray = egcd(e, totient);
let d = computeD(euclidArray);
let privateKey = computePrivateKey(euclidArray, totient);

let message = 21;

encrypt(message, e, n);

decrypt(encrypt(message, e, n), d, n);
