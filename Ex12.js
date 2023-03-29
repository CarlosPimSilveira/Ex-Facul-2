function removerPropriedade(obj, nomePropriedade) {
    const copiaObj = Object.assign({}, obj); // copiando o objeto original
    delete copiaObj[nomePropriedade]; // removendo a propriedade da cópia
    return copiaObj; // retornando a cópia modificada
  }
  