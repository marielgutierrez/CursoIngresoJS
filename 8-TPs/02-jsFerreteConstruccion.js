/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

Mariel Gutierrez
TP 2
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt (largo);
    ancho = parseInt (ancho);

    perimetro = 2 * largo + 2 * ancho;
    alambre = perimetro * 3;
    alert("Se debe comprar " + alambre + " metros de alambre.");

}
function Circulo () 
{
	let radio;
    let alambre;
    let perimetro;
    let pi;

    pi = 3.14;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    perimetro = 2 * pi * radio;
    alambre = perimetro * 3

    alert("Se debe comprar " + alambre + " metros de alambre.");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
    
    largo = parseInt (largo);
    ancho = parseInt (ancho);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;

    alert ("Se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal para un contrapiso de " + area + "m2.");
}