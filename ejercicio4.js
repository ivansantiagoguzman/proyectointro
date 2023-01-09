let n, negativo = 0, positivo = 0;
let Linea_de_texto_N = "", Linea_de_texto_P = "";
while(n != 0){
    n = prompt("Dame un numero");
    console.log(n);
    if(n < 0){
        negativo++;
    }else if(n > 0){
        positivo++;
    }
}
for (let i = 1; i <= positivo; i++){
    Linea_de_texto_P += "*";
}
console.log("Positivos: ",Linea_de_texto_P);
for (let y = 1; y <= negativo; y++){
    Linea_de_texto_N += "*";
}
console.log("Negativos: ",Linea_de_texto_N);