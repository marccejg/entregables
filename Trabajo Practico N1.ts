console.clear();
import * as fs from 'readline-sync';
/////////////////////////////////////////////////////////////
let participante: number = fs.questionInt("Ingrese cantidad de participantes: ");
////////determinar puntaje entre 0 y 5
let determinarPuntaje = (a:number): void =>  {
    while (a < 0 && a >5 )
    {
        console.log("El valor debe ser entre mayor que 0 y menor o igual a 5");
    };
}
//calcula el puntaje
let calcularPuntaje = (a: number, b: number, c: number): number => {
    let suma: number = (a + b + c);
    return suma;
};
///////////////////////////////////////////////////////////////////
//determina ganador
let determinarGanador = (): any => {
    let notaMayor:number=0;
    let ganador:any=0; 
    for (let i: number = 1; i <= participante; i++) {
    let particOrden = i
    console.log("Notas particitante",i);
    let sabor:number = fs.questionInt("ingrese puntaje por sabor: ");
    determinarPuntaje(sabor);
    let presentacion: number = fs.questionInt("ingrese puntaje por presentacion: ");
    determinarPuntaje(presentacion);
    let dificultad: number = fs.questionInt("ingrese puntaje por dificultad: ");
    determinarPuntaje(dificultad);
    let pteNota = calcularPuntaje(sabor, presentacion, dificultad);
    if (pteNota > notaMayor) {
        notaMayor = pteNota;
        ganador = i;
    } else {ganador ="empate"}
}
    return ganador;
}
////////////////////////////////////////////////////////////////////
let ganador = determinarGanador()
console.log("el ganador de la competencia es",ganador);
