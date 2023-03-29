function numerosParesComIndicesPares(array) {
    return array.filter((num, index) => num % 2 === 0 && index % 2 === 0);
  }
  