function removerVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let novaStr = '';
  
    for(let i = 0; i < str.length; i++) {
      if(!vogais.includes(str[i])) {
        novaStr += str[i];
      }
    }
  
    return novaStr;
  }
  