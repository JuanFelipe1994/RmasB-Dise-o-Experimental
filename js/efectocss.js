$(document).ready(function(){

$("#contact").waypoint(function() {
	$(".iconmaps").removeClass("hidden");
	$("#lineas_contacto").removeClass("hidden");
	$("#muestraedificio").removeClass("hidden");
	efecto();
},
{
	offset: '100%',
	triggerOnce: true
});

var maps = $(".iconmaps");
var line;
var blop;
var acaba;
function efecto(){
	$(".iconmaps").animate({
		"top":"1.3%",
		"opacity":"1"
	},2000);
 	line = setTimeout(barrido,2000);
 	blop = setTimeout(blop,2500);
 	acaba = setTimeout(acaba,5000);
	}	
function barrido(){
	$("#lineas_contacto").animate({
			"width":"600px",
		},1000);
}
function blop(){
	$("#muestraedificio").animate({
		"top":"-13%",
		"opacity":"1"
	},3);
}
function acaba(){
	$(".iconmaps").animate({
		"opacity":"0",
	},1000);
	setTimeout(function(){
		$(".iconmaps").addClass("hidden");
	},1000);
	$("#lineas_contacto").animate({
		"opacity":"0",
	},1000);
	setTimeout(function(){
		$("#lineas_contacto").addClass("hidden");
	},1000);
	
}

// ==============================================
//===============================================
// SCRIPT DEL MENÚ EN LA CABECERA DEL HTML
var captura;	
	$("#top-menu li a").click(function(){
		$("#top-menu div").removeAttr("class");
		var id = $(this).attr("name");
		$("#"+id).addClass(id+"-2");
	});


});