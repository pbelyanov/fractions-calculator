export function leastCommonDenominator(numbers) {
  let primeFactors = [];
  for (let i = 0; i < numbers.length; i++) {
    let factorization = primeFactorization(numbers[i]);
    for (let j = 0; j < factorization.length; j++) {
      let factor = factorization[j];
      let index = primeFactors.findIndex(function (x) {
        return x.prime === factor.prime;
      });
      if (index === -1) {
        primeFactors.push(factor);
      } else {
        primeFactors[index].exponent = Math.max(
          primeFactors[index].exponent,
          factor.exponent
        );
      }
    }
  }

  let lcd = 1;
  for (let i = 0; i < primeFactors.length; i++) {
    lcd *= Math.pow(primeFactors[i].prime, primeFactors[i].exponent);
  }

  return lcd;
}

function primeFactorization(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      let exponent = 0;
      while (num % i === 0) {
        exponent++;
        num /= i;
      }
      factors.push({ prime: i, exponent: exponent });
    }
  }
  return factors;
}
