function startValidacion(){
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", checkDni);

}
function checkNombre(){

}
function checkApellido(){

}
function checkDomicilio(){

}


function checkDni(){
    var dni;
    /*nombre = document.getElementById("nombre");
    apellido = document.getElementById("apellido");*/
    dni = document.getElementById("dni");
   /* domicilio = document.getElementById("domicilio");
    email =  nombre = document.getElementById("email");*/

    if(dni.length==8){

        if(dni>0 && dni<9){

        }else{
            alert("ingrese solo numeros")
        }
      
    }else{
       alert("incorrecto");
    }
   


}

function checkEmail(){

}



window.addEventListener("load" , startValidacion , false);