function startValidacion(){

    $("#contact-form").submit((e)=>{

      e.preventDefault();

    });
    
    let input = $("input");

    $("input").each((i)=>{


      $(input[i]).keyup(formValidation);
      $(input[i]).blur(formValidation);
        
    
    });

}


const formValidation=(e)=>{

  switch(e.target.id){

    case "dni":
    checkInput1(e.target ,
               numbers( $("#dni").val() ),
               8,
               $("#alert-dni"));
    break;

    case "nombre":
    checkInput2(e.target ,
               letters( $("#nombre").val() ),
               ($("#nombre").val()).length,
               3,
               20,
               $("#alert-name"));
    break;

    case "apellido":
    checkInput2(e.target ,
                  letters( $("#apellido").val() ),
                  ($("#apellido").val()).length,
                  4,
                  30,
                  $("#alert-lastName"));
      break;

    case "domicilio":
    checkInput2(e.target ,
               lettersAndNumbers( $("#domicilio").val() ),
               ($("#domicilio").val()).length,
               5,
               30,
               $("#alert-address"));
    break;

    case "email":
    checkInput2(e.target ,
               lettersNumbersCharacters( $("#email").val() ),
               ($("#email").val()).length,
               8,
               40,
               $("#alert-email"));
    break;

    case "telefono":
      checkInput2(e.target ,
               numbers( $("#telefono").val() ),
               ($("#telefono").val()).length,
               8,
               10,
               $("#alert-phone"));
    break;
  }

}

let checkInput1=(input, testCharacters, sizeInput, alert)=>{

  let inputValue = input.value;
  let size = inputValue.length;

  if(inputValue!==""){

    if( (testCharacters && size==sizeInput) ){

      $(input).removeClass("border-danger");
      $(input).addClass("border-success");

      $(alert).removeClass("d-block");
      $(alert).addClass("d-none");

    }else{

        $(location).attr('href',"index.html#validacion");
        $(alert).removeClass("d-none");
        $(alert).addClass("d-block");

        $(input).addClass("border-danger");
        $(input).removeClass("border-success");

       

    }


  }

}


let checkInput2=(input, testCharacters, sizeInput, lessThan, greaterThan, alert)=>{

  let inputValue = input.value;

  if(inputValue!==""){

    if(( (testCharacters) && (sizeInput>=lessThan && sizeInput<=greaterThan) ) ){

      $(input).removeClass("border-danger");
      $(input).addClass("border-success");

      $(alert).removeClass("d-block");
      $(alert).addClass("d-none");

    }else{

        $(location).attr('href',"index.html#validacion");
        $(alert).removeClass("d-none");
        $(alert).addClass("d-block");

        $(input).addClass("border-danger");
        $(input).removeClass("border-success");

       

    }
  }

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