function segundoMaior(array) {
  
    array.sort(function(a, b) {
      return b - a;
    });
  
    return array[1];
  }
  