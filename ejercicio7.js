let fila, columna;
let derecha, izquierda, arriba, abajo;
let derecha_abajo, derecha_arriba, izquierda_abajo, izquierda_arriba;
let arriba_derecha, arriba_izquierda, abajo_derecha, abajo_izquierda; 

fila = parseInt(prompt("Dime la fila"));
columna = parseInt(prompt("Dime la columna"));

if (fila + 2 <= 8){ //derecha
    derecha = fila + 2;
    if(columna + 1 <= 8){
        derecha_arriba = columna + 1;
        console.log("posiscion:", derecha,",",derecha_arriba);
    }
    if(columna - 1 > 0){
        derecha_abajo = columna - 1;
        console.log("posiscion:", derecha,",",derecha_abajo);
    }
}
if (fila - 2 > 0){ //izquierda
    izquierda = fila - 2;
    if(columna + 1 <= 8){
       izquierda_arriba = columna + 1;
       console.log("posiscion:", izquierda,",",izquierda_arriba);
    }
    if(columna - 1 > 0){
        izquierda_abajo = columna - 1;
        console.log("posiscion:", izquierda,",",izquierda_abajo);
    }
}
if (columna + 2 <= 8){ //derecha
    arriba = columna + 2;
    if(fila + 1 <= 8){
        arriba_derecha = fila + 1;
        console.log("posiscion:", arriba_derecha,",",arriba);
    }
    if(fila - 1 > 0){
        arriba_izquierda = fila - 1;
        console.log("posiscion:", arriba_izquierda,",",arriba);
    }
}
if (columna - 2 > 0){ //izquierda
    abajo = columna - 2;
    if(fila + 1 <= 8){
       abajo_derecha = fila + 1;
       console.log("posiscion:", abajo_derecha,",",abajo);
    }
    if(fila - 1 > 0){
        abajo_izquierda = fila - 1;
        console.log("posiscion:", abajo_izquierda,",",abajo);
    }
}