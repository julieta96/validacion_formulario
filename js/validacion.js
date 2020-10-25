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


function checkDni(){
    var dni;
    dni = document.getElementById("dni");
   

    if(dni.length==8){

       /* if(dni>0 && dni<9){
            alert("correcto");

        }else{
            alert("ingrese solo numeros")
        }*/
        alert("correcto");
    }else{
       alert("incorrecto");
    }
   


}

function checkEmail(){
    var email;
    email =  nombre = document.getElementById("email");

}



window.addEventListener("load" , startValidacion , false);