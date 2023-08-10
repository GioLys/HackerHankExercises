function diagonalDifference(arr) {
    let diagonalEsquerda = 0;
    let diagonalDireita = 0;
    
    
    for (let i = 0; i < arr.length; i++){
        diagonalEsquerda += arr[i][i];
        diagonalDireita += arr[i][arr.length - 1 - i];
    }
      
      return Math.abs(diagonalEsquerda - diagonalDireita);
  }