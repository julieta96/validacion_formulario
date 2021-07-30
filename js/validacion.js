function startValidacion(){

    $("#enviar").click(function(){

        checkDni($("#dni"));
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

        $(location).attr('href',"index.html#validacion");
        createMessageAlert("El dni debe contener <strong>8 numeros</strong>");
     }

        
   }
   
}

function checkNombre(nombre){

    let name = nombre.val();
    let size = name.length;
    
    alert(name);
}


function checkApellido(apellido){

    let lastName = apellido.val();
    let size = lastName.length;
   
    alert(lastName);

}

function checkDomicilio(address){

    let addressUser = address.val();
    let size = addressUser.length;
   
    alert(addressUser);
}

function checkEmail(email){

    let emailUser = email.val();
   
    alert(emailUser);

}

function checkTelefono(phone){

    let telefono = phone.val();
    let size = telefono.length;

     if(telefono!==""){

     if(size>=1 && size<=10) {
         
         alert("right");

     }else{

        $(location).attr('href',"index.html#validacion");
        createMessageAlert("El telefono debe contener como maximo <strong>10 numeros</strong>");
     }

        
   }
   

}

function createMessageAlert(mensaje){

    let alert = $("<div>");
    let p = $("<p>");

    alert.addClass("alert alert-warning container align-items-center row mb-2");
    alert.attr("role","alert");
    alert.append(p);
    p.addClass("text-center");
    p.html(mensaje);
    
    $(".mensaje").append(alert);
   

}



window.addEventListener("load" , startValidacion);