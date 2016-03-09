$(document).ready(function(){
	var soft;
	var video1;
	var video2;
	var desweb;
	var img1;
	var img2;
	var p;
	$("#diseno_web").waypoint(function() {

		function efecto (){
			$("#diseno_web").children("h1").animate({
				"width":"360px"
			},2700);
			setTimeout(function(){$("#intermitente").addClass("intermitente")}, 2700);
			p = setTimeout(texto,2500);
			soft = setTimeout(escribir_soft,13500);
			setTimeout(function(){$("#intermitente2").addClass("intermitente2")},16500);
			video2 = setTimeout(movimiento2,17000);
			video1 = setTimeout(movimiento1,17500);
			desweb = setTimeout(escribir_web,18000);
			setTimeout(function(){$("#intermitente3").addClass("intermitente3")},21000);
			img1 = setTimeout(movimientoimg1,21500);
			img2 = setTimeout(movimientoimg2,22000);
		}
		function texto(){
			$("#diseno_web").children("p").animate({
				"opacity":"1"
			},3200);
		}
		function escribir_soft(){
			$("#diseno_web").children("#titulo1").css("display","block");
			$("#diseno_web").children("#titulo1").animate({
				"width":"378px",
			},3000);
		}
		function movimiento2(){
			$("#diseno_web").children("#frame2").animate({
				"margin":"1% 0 0 60%"
			},1000);
		}
		function movimiento1(){
			$("#diseno_web").children("#frame1").animate({
				"margin":"1% 0 0 12%"
			},1000);
		}
		function escribir_web(){
			$("#diseno_web").children("#titulo2").css("display","block");
			$("#diseno_web").children("#titulo2").animate({
				"width":"270px"
			},3000);
		}
		function movimientoimg1(){
			$("#diseno_web").children("a").children("#tributar").animate({
				"margin":"1% 0 0 12%"
			},500);
		}
		function movimientoimg2(){
			$("#diseno_web").children("a").children("#hache").animate({
				"margin":"1% 0 0 60%"
			},500);
		}
		efecto();

	},
	{
		offset: '100%',
		//triggerOnce: true
	});

});