/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
//declare una variable
let nombreIngresado;

nombreIngresado = prompt ("Ingrese su nombre");

//mostrar un dato
document.getElementById("txtIdNombre").value = nombreIngresado

}

