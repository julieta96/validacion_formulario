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

     if(size==8 && numbers(passaport)=="true") {
         
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

    if(name!=""){

     if(size<=20 && letters(name)==true){
         alert(name);
     }else{

        $(location).attr('href',"index.html#validacion");
        createMessageAlert("El nombre no debe contener mas de <strong>20 letras</strong>");
     }

  }
   
}


function checkApellido(apellido){

    let lastName = apellido.val();
    let size = lastName.length;
    
    if(lastName!=""){

          if(size<=30 && letters(lastName)==true){
         alert(lastName);
     }else{

        $(location).attr('href',"index.html#validacion");
        createMessageAlert("El apellido no debe contener mas de <strong>30 letras</strong>");
     }


   }

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


     if(size>=8 && size<=10 && (numbers(telefono)==true) ) {
         
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


function letters(string){

    let lowerUpperCaseLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let test = false;

    for (let i=0; i <string.length ; i++) { 
        
        if( string.charAt(i) === lowerUpperCaseLetters.charAt(i) ){

            test = false;
            break;

        }else{

            test = true;
        }

        
    }

    return test;

 }


 function numbers(nums){

    let numbers = "0123456789";
    let test = false;

    for (let i=0; i <nums.length ; i++) { 

        
        if(nums.charAt(i) === numbers.charAt(i) ){

            test = false;
            break;

        }else{
             test = true;
        }

        
    }

    return  test;

 } 



window.addEventListener("load" , startValidacion);