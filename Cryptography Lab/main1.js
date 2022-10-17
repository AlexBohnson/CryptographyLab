



let pqArray = generatePQ();
let n = generateN(pqArray);
let totient = generateTotient(pqArray);
let e = generateE(totient);
let euclidArray = Euclid_gcd(e, totient);
let d = computeD(euclidArray);
let privateKey = computePrivateKey(euclidArray, totient);

let message = 21;

//test encryption
encrypt(message, e, n);

//test decryption
decrypt(encrypt(message, e, n), d, n);