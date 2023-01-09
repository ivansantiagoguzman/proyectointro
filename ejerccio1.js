let numero = 0;
let numeros = 1;

numero = prompt("Marca un limite");

while(numeros < numero){
    if(numeros%3 == 0 || numeros%7 == 0){
    }else{
        console.log(numeros);
    }
    numeros++;
}