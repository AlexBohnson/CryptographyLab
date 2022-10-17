
let pqArray = generatePQ();
let n = generateN(pqArray);
let totient = generateTotient(pqArray);
let e = generateE(totient);
//let euclidArray = euclideExtended(e, totient);
let d = computeD(e, totient);

//document.write(' egcd array = ' + egcd(e, totient) +'    ');

let message = 21;

//test encryption

let cypherText = encrypt(message, e, n);

//test decryption
decrypt(cypherText, d, n);