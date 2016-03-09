function mostrarFotoGrande (argument) {
	var imagen = $(this).data('large');
	$(".related_photo").removeClass("selected");
	$(this).addClass("selected");
	$(".og-fullimg").children('img').fadeOut(500, function(){
		$(this).fadeIn(500).attr("src", imagen)// PROPIEDAD QUE MUESTRA LA IMAGEN YA EXPANDIDA DEL SUBMENU
	});
	
}
$(".related_photo").on("click", mostrarFotoGrande);
$("#carrusel-inicio").load("carousel-1.html");
function cargarCarrusel(datos){
	var num = $(this).data("filter");
	// alert(num);
	$("li").click(function(){
		$("li").removeClass("current");
		$(this).addClass("current");
	});
	//$("li").addClass("current");//cambia color al elemento li que se haya seleccionado a todos los li
	$("#carrusel-inicio").load("carousel-" + num + ".html");
}

$(".filter").on("click", cargarCarrusel);

$("#portfolio-filter li a").click(function(){
	$(".portfolio_area").css("height","825px");
});



function pintarli () {
	$("#ul-construccion").children("li").removeClass("active");
	$("#ul-construccion > li:first-child").addClass("active");
}
