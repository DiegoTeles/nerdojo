// @Author Leonardo Camargo

var num = 1;
var arr = [];
var total = 0;

let criaArray = (linha, coluna) => {
  total = linha * coluna;
  for (i = 1; i <= linha; i++) {
    arr.push([]);
    for (j = 1; j <= coluna; j++) {
      arr[i-1].push(0);
    }
  }
  return arr;
}

let preencheLinhaAsc = (linha) => {
  const maxCol = arr[linha].length - 1;
  for (i = 0; i <= maxCol; i++) {
    if (!arr[linha][i]) {
      arr[linha][i] = num;
      num++;
    }
  }
}

let preencheColunaAsc = (coluna) => {
  const maxLinha = arr.length - 1;
  for (i = 0; i <= maxLinha; i++) {
    if (!arr[i][coluna]) {
      arr[i][coluna] = num;
      num++;
    }
  }
}

let preencheLinhaDesc = (linha) => {
  const maxCol = arr[linha].length - 1;
  for (i = maxCol; i >= 0; i--) {
    if (!arr[linha][i]) {
      arr[linha][i] = num;
      num++;
    }
  }
}

let preencheColunaDesc = (coluna) => {
  const maxLinha = arr.length - 1;
  for (i = maxLinha; i >= 0; i--) {
    if (!arr[i][coluna]) {
      arr[i][coluna] = num;
      num++;
    }
  }
}

let preencheArray = (arr) => {
  let minLinha = 0;
  let minCol = 0;
  let maxCol = arr[0].length - 1;
  let maxLinha = arr.length - 1;


  for (i = 1; i <= total; i++) {
    preencheLinhaAsc(minLinha);
    minLinha++;
    preencheColunaAsc(maxCol);
    maxCol--;
    preencheLinhaDesc(maxLinha);
    maxLinha--;
    preencheColunaDesc(minCol);
    minCol++;
    i = num;
  }
}

preencheArray(criaArray(10, 10));

for (i = 0; i < arr.length; i++) {
  let linha = '';
  for (j = 0; j < arr[i].length; j++) {
    if(arr[i][j] < 10){
      arr[i][j] = '0'+ arr[i][j];
    }
    linha = linha + ' '+arr[i][j]; 
  }
  console.log(linha);
}



