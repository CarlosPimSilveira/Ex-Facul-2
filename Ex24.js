function contarCaractere(caractere, string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === caractere) {
        count++;
      }
    }
    return count;
  }
  