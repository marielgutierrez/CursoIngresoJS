/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

Mariel Gutierrez
TP 3
*/
function FahrenheitCentigrados () 
{
	let temperaturaF;
    let temperaturaC;

    temperaturaF = document.getElementById("txtIdTemperatura").value;

    temperaturaF = parseFloat(temperaturaF);

    temperaturaC = (temperaturaF - 32) / 1.8;
    temperaturaC = temperaturaC.toFixed(2);

    alert(temperaturaF + " grados Fahrenheit son "  + temperaturaC + " grados Centígrados.")

}

function CentigradosFahrenheit () 
{
    let temperaturaC;
    let temperaturaF;

    temperaturaC = document.getElementById("txtIdTemperatura").value;

    temperaturaC = parseFloat(temperaturaC);

    temperaturaF = temperaturaC * 1.8 + 32;
    temperaturaF = temperaturaF.toFixed(2);
    
    alert(temperaturaC + " grados Centígrados son " + temperaturaF + " grados Fahrenheit.")
}
