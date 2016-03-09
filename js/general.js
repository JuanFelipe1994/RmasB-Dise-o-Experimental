//====================================================
// PRELOADER 
//====================================================
	function mostrarPreload(){
	  $('#status').fadeIn('slow'); // will first fade out the loading animation
      $('#preloader').fadeIn('slow'); // will fade out the white DIV that covers the website.
	}
	function ocultarPreload(){
  	  $('#status').delay(7000).fadeOut('slow'); // will first fade out the loading animation
      $('#preloader').delay(7000).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(7000).css({'overflow':'visible'});
	}
//==========================================================================================================================================================
// SECCION ARQUITECTURA
//==========================================================================================================================================================
//====================================================
// MODAL CARGA DE IMAGENES ISEO
//====================================================
$(".remodal-confirm").on("click",function(){
	mostrarPreload();
	$(".remodal-confirm").removeAttr("disabled");
    $(this).attr("disabled","disabled");
    $(".remodal-confirm").css({
      "background": "rgba(0,0,0,1)",
      "color":"#fff",
      "border": "1px solid #fff"
    });
    $(this).css({
      "background": "rgba(237,50,54,1)",
      "color":"#fff",
      "border": "1px solid #fff"
    });
	var pagina = $(this).attr("pagina");
  var id = $(this).parent("div").attr("name");
    $(id).load(pagina); 
});
//====================================================
// CERRAR CAROUSEL GENERAL
//====================================================
$("#cerrar_carousel").on("click",function(){
    $("#modal").css("display","none");
    $("#modal").empty();
});
//====================================================
// POP UP GIF EXPLICATIVO CAROUSEL ARQUITECTURA
//====================================================

function mostrarMouse(){
  if (typeof(Storage) !== "undefined") {
    var estadoMouse = localStorage.getItem("estadoMouse");
    String(estadoMouse);
    //alert(estadoMouse);
    if ((estadoMouse.length < 1) || (estadoMouse == "null")) {
      // Store
      localStorage.setItem("estadoMouse", false);
    } 
  } else {
      alert("muestra algo");
  }
  if (estadoMouse == "true") {
      $("#mouse").addClass("hidden");
  }else{
    localStorage.setItem("estadoMouse", false);
    setTimeout(function(){
      $("#mouse").removeClass("hidden");
    },8000);
  }
  $("#close-mouse").on("click",function(){
    $("#mouse").addClass("hidden");
    localStorage.setItem("estadoMouse", true);
  });
}
//====================================================
// FOOTER SECCION QUIENES SOMOS
//====================================================

function footerQs(){
  var anchoQs = $(window).width();
  var altoQs = $(window).height();
  var tem = $(".template").height();
  if (anchoQs >= 1280) {
    altoQs = altoQs - 40;
    tem = tem + 185;
    //alert("cambio");
    $("#section1").css({"height":+altoQs+"px"});
    $("#section1").css({"min-height":+tem+"px"});
    $("#about").css({"height":+altoQs+"px"});
    $("#about").css({"min-height":+tem+"px"});
  }else if ((anchoQs >= 1024) && (anchoQs <=1279)) {
    altoQs = altoQs - 40;
    $("#section1").css({"height":+altoQs+"px"});
    $("#about").css({"height":+altoQs+"px"});
  }
  
  
  
}
//====================================================
// AJUSTE DE INDEX CON FOOTER INDEX.HTML
//====================================================
function ajustarInicio(){
  var altoVentana = $(window).height();
  altoVentana = altoVentana - 40;
  var anchoVentana = $(window).width();

  if (anchoVentana >= 1024) {
    $("#header").css({"height":+altoVentana+"px"});
    $(".slider_area").css({"height":+altoVentana+"px"});
    $("#slides").css({"height":+altoVentana+"px"});
  }
  else{
    altoVentana = altoVentana + 40;
    $("#header").css({"height":+altoVentana+"px"});
    $(".slider_area").css({"height":+altoVentana+"px"});
    $("#slides").css({"height":+altoVentana+"px"});
  }
}
//====================================================
// AJUSTE FOOTER DEN DISEÑO GRÁFICO
//====================================================
function footerDg(){
  var anchoDg = $(window).width();
  var altoDg = $(window).height();

  if (anchoDg >= 1024) {
    altoDg = altoDg - 40;
    $("#section3").css({"height":+altoDg+"px"});
  }
  else{
    $("#section3").css({"height":+altoDg+"px"});
  }
}
//====================================================
// MOVIMIENTO AVIONETA SECCION DISEÑO GRÁFICO
//====================================================
function vuelaAvioneta(){
  var posAvioneta = $("#avioneta").css("margin-left");
  posAvioneta = posAvioneta.substring(0, posAvioneta.length - 2);
  //alert(posAvioneta);
  var totalAncho = $(window).width();
  if (totalAncho >= 1920) {
    if (posAvioneta >= 1400) {
      $("#avioneta").animate({"margin-left":"60%"},2000);
    }else{
      $("#avioneta").animate({"margin-left":"85%"},2000);
    }
  }else if ((totalAncho >= 1280) && (totalAncho <= 1919)){
    if (posAvioneta >= 1000) {
      $("#avioneta").animate({"margin-left":"60%"},2000);
    }else{
      $("#avioneta").animate({"margin-left":"85%"},2000);
    }
  }else if ((totalAncho >= 1024) && (totalAncho <= 1279)) {
    if (posAvioneta >= 800) {
      $("#avioneta").animate({"margin-left":"60%"},2000);
    }else{
      $("#avioneta").animate({"margin-left":"85%"},2000);
    }
  }else if ((totalAncho >= 768) && (totalAncho <= 1023)) {
    if (posAvioneta >= 550) {
      $("#avioneta").animate({"margin-left":"40%"},2000);
    }else{
      $("#avioneta").animate({"margin-left":"85%"},2000);
    }
  }else if ((totalAncho >= 667) && (totalAncho <= 767)) {
    if (posAvioneta >= 400) {
      $("#avioneta").animate({"margin-left":"40%"},2000);
    }else{
      $("#avioneta").animate({"margin-left":"85%"},2000);
    }
  }else if ((totalAncho >= 480) && (totalAncho <= 666)) {
    if (posAvioneta >= 400) {
      $("#avioneta").animate({"margin-left":"15%"},2000);
    }else{
      $("#avioneta").animate({"margin-left":"85%"},2000);
    }
  }
    
}
//====================================================
// DIMSENSIÓN DEL CAROUSEL DG SEGUN TAMAÑO DE LA PANTALLA
//====================================================
function dimensionCarousel(){
  var anchoCarousel = $(window).width();
  var altoCarousel = $(window).height();
  $(".stage").css({"height":+altoCarousel+"px"});
  $("#dg_e3, #dg_e3 > div, #dg_e3 > div > img").css({
    "width":+anchoCarousel+"px",
    "height":+altoCarousel+"px"
  });
}

function dimensionCarousel2(){
  var anchoCarousel = $(window).width();
  var altoCarousel = $(window).height();
  $(".stage").css({"height":+altoCarousel+"px"});
  $("#dg_eco104, #dg_eco104 > div, #dg_eco104 > div > img").css({
    "width":+anchoCarousel+"px",
    "height":+altoCarousel+"px"
  });
}

function dimensionCarousel3(){
  var anchoCarousel = $(window).width();
  var altoCarousel = $(window).height();
  $(".stage").css({"height":+altoCarousel+"px"});
  $("#dg_gaia104, #dg_gaia104 > div, #dg_gaia104 > div > img").css({
    "width":+anchoCarousel+"px",
    "height":+altoCarousel+"px"
  });
}
//====================================================
// REDIMENSION CONTENIDO SECCION CONTACTO
//====================================================
function redimensionContacto(){
  var anchoContacto = $(window).width();
  var altoContacto = $(window).height();

  if (anchoContacto >= 1024) {
    altoContacto = altoContacto - 40;
    $("#section6, #contact").css({
      "width":+anchoContacto+"px",
      "height":+altoContacto+"px"
    });
    var contentContact = $(".contact_content").height();
    //alert(contentContact);
    contentContact = contentContact - 206;
    $("#message").css({
      "height":+contentContact+"px",
    });
  }else{
    $("#section6, #contact").css({
      "width":+anchoContacto+"px",
      "height":+altoContacto+"px"
    });
  }

}
//====================================================
// FOOTER EN SECCION VENTAS y el cambio de imagen para tablet vertical
//====================================================
function footerVentas(){
  var altoVentas = $(window).height();
  var anchoVentana = $(window).width();

  if (anchoVentana >= 1280){
    altoVentas = altoVentas - 40;
    $("#section5").css({"height":+altoVentas+"px"});
    $("#section5").css({"width":+anchoVentana+"px"});
    $("#banner").children("img").remove();
    $("#banner").append("<img id='marca_agua' src='images/marcabanner.png'>");
    $("#banner").append("<img id='img_banner' src='images/banner.png'>");
  }else if ((anchoVentana >= 1024) && (anchoVentana <= 1279)){
    altoVentas = altoVentas - 40;
    $("#section5").css({"height":+altoVentas+"px"});
    $("#section5").css({"width":+anchoVentana+"px"});
    $("#banner").children("img").remove();
    $("#banner").append("<img id='marca_agua' src='images/marcabanner.png'>");
    $("#banner").append("<img id='img_banner' src='images/banner.png'>");
  }else if((anchoVentana >= 768) && (anchoVentana <= 1023)){
    $("#section5").css({"height":+altoVentas+"px"});
    $("#section5").css({"width":+anchoVentana+"px"});
    $("#banner").children("img").remove();
    $("#banner").append("<img id='marca_agua' src='images/marcabannervertical.png'>");
    $("#banner").append("<img id='img_banner' src='images/bannervertical.png'>");
  }else{
    $("#section5").css({"height":+altoVentas+"px"});
    $("#section5").css({"width":+anchoVentana+"px"});
  }
}
//====================================================
// BOTON DE SELECCIÓN DE IDIOMAS
//====================================================
function btnIdiomas(){
  var ventanaAncho = $(window).width();
  var posIdiomas = $("#contenedor_idiomas").css("margin-top");
  posIdiomas = posIdiomas.substring(0, posIdiomas.length - 2);
  //alert(posIdiomas);
    if (posIdiomas <= -100) {
      $("#idiomas").css({"color":"rgba(237,50,54,1)"});
      $("#contenedor_idiomas").animate({"margin-top":"-32px"},1000);
    }else{
      $("#idiomas").css({"color":"#fff"});
      $("#contenedor_idiomas").animate({"margin-top":"-100px"},1000);
    }
}














