let contador = 1;

n = prompt("Marca un limite");

while(contador < n){
    s1 = s1 + contador;
    contador++;
}

s2 = (n * ((n + 1)/2))

console.log("S1 = ",s1);
console.log("S2 = ",s2);

if(s1 == s2){
    console.log("son iguales");
}else{
    console.log("no son iguales");
}