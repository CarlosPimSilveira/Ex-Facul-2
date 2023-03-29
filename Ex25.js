function filtrarPalavras(palavra, array) {
    return array.filter(function(str) {
      return str.includes(palavra);
    });
  }
  