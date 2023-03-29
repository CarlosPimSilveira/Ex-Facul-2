function somarDespesas(despesas) {
    let total = 0;
    for (let i = 0; i < despesas.length; i++) {
      total += despesas[i].preco;
    }
    return total;
  }
  