function startValidacion(){

    let enviar = $("#enviar");
    let  dni ;
    dni=$("#dni");
    enviar.click(function(){

        checkDni(dni);
        checkNombre($("#nombre"));
        checkApellido($("#apellido"));
        checkDomicilio($("#domicilio"));
        checkEmail($("#email"));
        checkTelefono($("#telefono"));


    });

}

function checkDni(dni){

    let passaport = dni.val();
    let size = passaport.length;

   if(passaport!==""){

     if(size==8) {
         
         alert("right");

     }else{

        alert("el dni debe contener 8 numeros");
     }

        
   }
   
}

function checkNombre(nombre){
    let name = nombre.val();
    
    alert(name);
}


function checkApellido(apellido){

    let lastName = apellido.val();
   
    alert(lastName);

}

function checkDomicilio(address){

    let addressUser = address.val();
   
    alert(addressUser);
}

function checkEmail(email){

    let emailUser = email.val();
   
    alert(emailUser);

}

function checkTelefono(phone){

    let telefono = phone.val();
   
    alert(telefono);

}



window.addEventListener("load" , startValidacion);