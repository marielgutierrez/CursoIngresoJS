/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Mariel Gutierrez
TP 1 con E/S
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let sumar;

	//tomar el ID
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	sumar = precioUno + precioDos + precioTres;
	alert("La suma es $ " + sumar);

}//FIN DE LA FUNCIÓN

function Promedio()
{
	let precioUno;
	let precioDos;
	let precioTres;
	let promedio;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	promedio = (precioUno + precioDos + precioTres)/ 3;

	promedio = promedio.toFixed(2);
	alert("El promedio es $ " + promedio);

}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioFinal;
    let iva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

    iva = (precioUno + precioDos + precioTres) * 21 /100;
    precioFinal = precioUno + precioDos + precioTres + iva;

    alert("El precio final es $ " + precioFinal);
}