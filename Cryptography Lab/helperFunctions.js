

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

function egcd(a, b){
    let x = 0;
    let y = 1;
    let u = 1;
    let v = 0;


    while (a != 0){
        let q = Math.floor(b/a);
        let r = b % a;
        let m = x-u*q;
        let n = y-v*q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }

    let gcd = b;
    return [gcd, x, y];
}