function startValidacion(){
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", checkDni);

}
function checkNombre(){
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

}



window.addEventListener("load" , startValidacion , false);