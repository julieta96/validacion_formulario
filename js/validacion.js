function startValidacion(){

}
function send(){

}
function checkValidacion(){
    var nombre, apellido , dni , email , domicilio;
    nombre = document.getElementById("nombre");
    apellido = document.getElementById("apellido");
    dni = document.getElementById("dni");
    domicilio = document.getElementById("domicilio");
    email =  nombre = document.getElementById("email");

    if(dni.length!=8){
       alert("dni debe tener 8 numeros");
    }else{
       alert("correcto");
    }
    if(dni>0 && dni<9){

    }else{
        alert("ingrese solo numeros")
    }


}

window.addEventListener("load" , startValidacion , false);