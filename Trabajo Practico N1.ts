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



let determinarGanador = (participante: number, nota: number): number => {
    for (let i: number = 1; i <= participante; i++) {
    let particOrden = i
    let sabor: number = fs.questionInt("ingrese puntaje por sabor: ");
    let presentacion: number = fs.questionInt("ingrese puntaje por presentacion: ");
    let dificultad: number = fs.questionInt("ingrese puntaje por dificultad: ");
    let pteNota = calcularPuntaje(sabor, presentacion, dificultad);
}

    return 1;

}

