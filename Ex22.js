function verificaNumero(num) {
    // Gera um número aleatório de 1 a 10
    const numSorteado = Math.floor(Math.random() * 10) + 1;
    
    if (num === numSorteado) {
      return `Parabéns! O número sorteado foi o ${numSorteado}.`;
    } else {
      return `Que pena! O número sorteado foi o ${numSorteado}.`;
    }
  }
  