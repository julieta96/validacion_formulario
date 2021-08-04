$(window).on('resize', function () {
   
   let widthBrower= $(window).width();

	   if(widthBrower>=400 && widthBrower<=769){

                $(".mensaje>.alert p, .mensaje>.alert p strong").css("font-size","12px");
                $(".mensaje>.alert").css("padding","0px");

	   			$("form> #container-inputs").addClass("container");

	   			$("#container-inputs>div").removeClass("col");
	   			$("#container-inputs>div").addClass("row mb-3");

	   			$("#container-inputs>div input").css("font-size","12px");

	   			$("#enviar").addClass("btn-sm");

	   			$("#enviar").css("font-size","12px");
	   }else{

	   	$(".mensaje>.alert p, .mensaje>.alert p strong").css("font-size","1rem");
        $(".mensaje>.alert").css("padding","1rem");

	   $("form> #container-inputs").removeClass("container");

	   $("#container-inputs>div").removeClass("row mb-3 container");
	   $("#container-inputs>div").addClass("col");


	   $("#container-inputs>div input").css("font-size","15px");

	   $("#container-inputs>div input").removeClass("container");

	   $("#enviar").removeClass("btn-sm");

	   $("#enviar").css("font-size","1rem");

	   }

});