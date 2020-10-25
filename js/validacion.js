function startValidacion(){
    var enviar = document.getElementById("enviar");
    var dni ;
    dni=document.getElementById("dni");
    enviar.addEventListener("click", checkDni(dni));

}
function checkDni(dni){
    var size = dni;

   alert(size); 
}

/*function checkNombre(){
    var nombre;
    nombre = document.getElementById("nombre");
}
function checkApellido(){
    var apellido;
    apellido = document.getElementById("apellido");

}
function checkDomicilio(){
    var domicilio;
    domicilio = document.getElementById("domicilio");
}

function checkEmail(){
    var email;
    email =  nombre = document.getElementById("email");

}*/



window.addEventListener("load" , startValidacion);