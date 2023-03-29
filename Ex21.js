function encontrarMenorNumero(array) {
    let menorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < menorNumero) {
        menorNumero = array[i];
      }
    }
    return menorNumero;
  }
  