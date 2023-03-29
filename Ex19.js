function calcularMedia(numeros) {
    const quantidade = numeros.length;
    
    if (quantidade === 0) {
      return 0;
    }
    
    const soma = numeros.reduce((total, numero) => total + numero);
    const media = soma / quantidade;
    
    return media;
  }
  