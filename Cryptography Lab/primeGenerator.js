function isPrime(n, k) {
    if (n < 2) {
        return false;
    } else if (n < 4) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    }

    let s = 0;
    let d = n - 1;

    while (d % 2 == 0) {
        s += 1;
        d = math.floor(d / 2);
    }

    for (let i = 0; i < k; i++) {
        let a = getRandomInt(2, n - 1);
        let x = (Math.pow(a, d) % n);

        if (x == 1) {
            continue;
        } //else { 
            
        for (let j = 0; j < s; j++) {
            if (x == n - 1) {
                break;
            } else {
                x = (x * x) % n;
            }
        }
        //}
    }


}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}