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

     if(size==8 && numbers(passaport)) {
         
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

     if(size<=20 && letters(name)){
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

          if(size<=30 && letters(lastName)){
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

    if(addressUser!=""){

        if(size<=30 && lettersAndNumbers(addressUser)){

            alert(addressUser);

        }else{

            $(location).attr('href',"index.html#validacion");
            createMessageAlert("La direccion debe contener <strong> no mas de 30 caracteres (letras y numeros)</strong>");
        }

    }
   
    
}

function checkEmail(email){

    let emailUser = email.val();
    let size = emailUser.length;

    if(emailUser!=""){

        if (size<=40 && lettersNumbersCharacters(emailUser)) {

        alert(emailUser);
        }else{
             $(location).attr('href',"index.html#validacion");
            createMessageAlert("Formato de email ingresado incorrecto, <strong> no mas de 40 caracteres (debe contener letras minusculas, un punto , un arroba y puede contener numeros y como maximo 2 guion bajo)</strong>");
        }
    }
   
   

}

function checkTelefono(phone){

    let telefono = phone.val();
    let size = telefono.length;

     if(telefono!==""){


     if(size>=8 && size<=10 && (numbers(telefono)) ) {
         
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

    let lowerUpperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];         
    let array = string.split("");
    let test = false;

    for (let i=0; i <string.length ; i++) { 
        
        if(!(lowerUpperCaseLetters.includes(array[i]) )){

            test = false;
            break;

        }else{

            test = true;
        }

        
    }

    return test;

 }


 function numbers(nums){

    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    let array = nums.split("");
    let test = false;

    for (let i=0; i <nums.length ; i++) { 

        
        if(!(numbers.includes(array[i]) )){

            test = false;
            break;

        }else{
             test = true;
        }

        
    }

    return  test;

 } 

 function lettersAndNumbers(string){

    let lowerUpperCaseLettersAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    let array = string.split(" ").join("");
    let test = false;

    for (let i=0; i <array.length ; i++) { 

        if( !( lowerUpperCaseLettersAndNumbers.includes(array[i]) )){

            test = false;
            break;

        }else{
             test = true;
        }

        
    }

    return  test;

 } 

 function lettersNumbersCharacters(string){

    let lowerCaseLettersNumbersAndOthersCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","_","@","."];
    let array = string.split("");
    let test = false;
    let at = 0;
    let dot = 0;
    let underscore = 0;

    for (let i=0; i <array.length ; i++) { 

        if( !( lowerCaseLettersNumbersAndOthersCharacters.includes(array[i]) )){

            test = false;
            break;

        }else{
              
              if(string.charAt(i) =='@'){

                at++;

              }

              if(string.charAt(i) =='.'){

                dot++;

              }

              if(string.charAt(i) =='_'){

                underscore++;

              }

                 
        }

        
    }

    if(at==1 && dot == 1 && underscore<=2){

                test = true;
     }

    return  test;

 } 


window.addEventListener("load" , startValidacion);