function filtrarPorQuantidadeDeDigitos(array, digitos) {
    return array.filter(numero => String(numero).length === digitos);
  }
  