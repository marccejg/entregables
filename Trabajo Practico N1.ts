console.clear();
import * as fs from 'readline-sync';


/////////////////////////////////////////////////////////////
let participante: number = fs.questionInt("Ingrese cantidad de participantes: ");
//calcula el puntaje
let calcularPuntaje = (a: number, b: number, c: number): number => {
    let suma: number = (a + b + c);
    return suma;
};
///////////////////////////////////////////////////////////////////
//determina ganador



let determinarGanador = (): any => {
    let notaMayor:number=0;
   
    
    for (let i: number = 1; i <= participante; i++) {
    let particOrden = i
    let sabor: number = fs.questionInt("ingrese puntaje por sabor: ");
    let presentacion: number = fs.questionInt("ingrese puntaje por presentacion: ");
    let dificultad: number = fs.questionInt("ingrese puntaje por dificultad: ");
    let pteNota = calcularPuntaje(sabor, presentacion, dificultad);
    if (pteNota > notaMayor) {
        notaMayor = pteNota;
    }else {notaMayor};
  
}
    return notaMayor;



}
let ganador = determinarGanador()
console.log(ganador);
