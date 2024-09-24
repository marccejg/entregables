console.clear();
import * as fs from 'readline-sync';
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
let participante: number = fs.questionInt("Ingrese cantidad de participantes: ");
//////////determinar puntaje entre 0 y 5/////////////////////
/////////////////////////////////////////////////////////////

let determinarPuntos = (a:number): void => {
    while (a < 0 || a > 5) {
            a = fs.questionInt("valor valido solo entre 0 y 5: ");
        };
    }
///////////////////calcula el puntaje//////////////////////////////
///////////////////////////////////////////////////////////////////
let calcularPuntaje = (a: number, b: number, c: number): number => {
    let suma: number = (a + b + c);
    return suma;
};

/////////////////////determina ganador/////////
//////////////////////////////////////////////

let determinarGanador = (): number => {
    let notaMayor: number = 0;
    let ganador: any = 0;

    for (let i: number = 1; i <= participante; i++) {
        console.log("Notas particitante", i);


        let sabor: number = fs.questionInt("ingrese puntaje por Sabor: ")
        determinarPuntos(sabor);
        /*while (sabor < 0 || sabor > 5) {
            console.log("Ingrese valor valido entre 0 y 5 para Sabor");
            sabor = fs.questionInt("ingrese puntaje por sabor: ");
        };*/
        let presentacion: number = fs.questionInt("ingrese puntaje por presentacion: ");
        determinarPuntos(presentacion);
        /*while (presentacion < 0 || presentacion > 5) {
            console.log("Ingrese valor valido entre 0 y 5 para Presentacion")
            presentacion = fs.questionInt("ingrese puntaje por presentacion: ");
        };*/
        let dificultad: number = fs.questionInt("ingrese puntaje por dificultad: ");
        determinarPuntos(dificultad);
        /*while (dificultad < 0 || dificultad > 5) {
            console.log("Ingrese valor valido entre 0 y 5 para Dificultad")
            dificultad = fs.questionInt("ingrese puntaje por dificultad: ");
        };*/
        let pteNota = calcularPuntaje(sabor, presentacion, dificultad);


        if (pteNota > notaMayor) {
            notaMayor = pteNota;
            ganador = i;
        } else if (pteNota == notaMayor) {
            ganador = "empate";
        }

    }
    return ganador;
}
let resultado = determinarGanador()
console.log("el ganador de la competencia es", resultado);
