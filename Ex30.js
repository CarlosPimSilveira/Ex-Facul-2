function melhorAluno(estudantes) {
    let melhorMedia = 0;
    let melhorAluno = "";
    
    for (let aluno in estudantes) {
      let notas = estudantes[aluno];
      let somaNotas = 0;
      
      for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
      }
      
      let media = somaNotas / notas.length;
      
      if (media > melhorMedia) {
        melhorMedia = media;
        melhorAluno = aluno;
      }
    }
    
    return { nome: melhorAluno, media: melhorMedia };
  }
  
  // Exemplo de uso:
  let estudantes = {
    João: [8, 7, 6, 9],
    Maria: [7, 9, 8, 9],
    Pedro: [6, 5, 8, 7]
  };
  
  let melhorDesempenho = melhorAluno(estudantes);
  console.log(melhorDesempenho);
  