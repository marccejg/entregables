console.clear();
import * as fs from 'readline-sync';
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
let participante: number = fs.questionInt("Ingrese cantidad de participantes: ");
//////////determinar puntaje entre 0 y 5/////////////////////
/////////////////////////////////////////////////////////////


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


        let sabor: number = fs.questionInt("ingrese puntaje por sabor: ")
        while (sabor < 0 || sabor > 5) {
            sabor = fs.questionInt("ingrese puntaje por sabor: ");
        };
        let presentacion: number = fs.questionInt("ingrese puntaje por presentacion: ");
        while (presentacion < 0 || presentacion > 5) {
            presentacion = fs.questionInt("ingrese puntaje por presentacion: ");
        };
        let dificultad: number = fs.questionInt("ingrese puntaje por dificultad: ");
        while (dificultad < 0 || dificultad > 5) {
            dificultad = fs.questionInt("ingrese puntaje por dificultad: ");
        };
        let pteNota = calcularPuntaje(sabor, presentacion, dificultad);

        
        if (pteNota > notaMayor) {
            notaMayor = pteNota;
            ganador = i;
        } else if(pteNota==notaMayor){
            ganador ="empate";
        }    

}
    return ganador;
}
let resultado = determinarGanador()
console.log("el ganador de la competencia es", resultado);
