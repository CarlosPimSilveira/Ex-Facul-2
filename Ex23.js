function contarPalavras(str) {
    
    str = str.trim();
    
    if (str === '') {
      return 0;
    }
    
    var palavras = str.split(/\s+/); 
    
    return palavras.length;
  }
  