
//=======================================================JS PARA LOS PÁRRAFOS	
	var texto;
	var txt2;
	var txt3;
	function texto (){
		$("#txtsmart").animate({
			"opacity":"1"
		},2000);
		$("#txtsmart").animate({
			"opacity":"1"
		},5000);
		$("#txtsmart").animate({
			"opacity":"0"
		},2000);
		setTimeout(txt2,9000);
	}
	function txt2 (){
		$("p#txtmision").animate({
			"opacity":"1"
		},2000);
		$("p#txtmision").animate({
			"opacity":"1"
		},3000);
		$("p#txtmision").animate({
			"opacity":"0"
		},2000);
		setTimeout(txt3,7000)
	}
	function txt3 (){
		$("#txtvalores").animate({
			"opacity":"1"
		},2000);
		$("#txtvalores").animate({
			"opacity":"1"
		},8000);
		$("#txtvalores").animate({
			"opacity":"0"
		},2000);
		setTimeout(texto,12000);
	}
	texto();

//=========================================================JS POP UP AVATARES
	$(".close_popup").on("click",function(){
		$(".popclosed").css({"display":"none"});
	});
	$("#smart1").on("click",function(){
		var heightC = $(window).height();
		$("#contenedoravatar").css({"height":heightC+"px"});
		$("#popup1").css({"display":"block"});
		tamano1();
		$(window).resize(function tamano1_1(){
			var tamanoW = $(window).width();
			$("#popup1").css({"width":tamanoW+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH = Number(tamanoW / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup1").css("height",tamanoH+"px");
		});
	});
	function tamano1(){
		var tamanoW = $(window).width();
		$("#popup1").css({"width":tamanoW+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH = Number(tamanoW / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup1").css("height",tamanoH+"px");
	}
	$("#smart2").on("click",function(){
		var heightC2 = $(window).height();
		$("#contenedoravatar").css({"height":heightC2+"px"});
		$("#popup2").css({"display":"block"});
		tamano2();
		$(window).resize(function tamano2_2(){
			var tamanoW2 = $(window).width();
			$("#popup2").css({"width":tamanoW2+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH2 = Number(tamanoW2 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup2").css("height",tamanoH2+"px");
		});
	});
	function tamano2(){
		var tamanoW2 = $(window).width();
		$("#popup2").css({"width":tamanoW2+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH2 = Number(tamanoW2 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup2").css("height",tamanoH2+"px");
	}
	$("#smart3").on("click",function(){
		var heightC3 = $(window).height();
		$("#contenedoravatar").css({"height":heightC3+"px"});
		$("#popup3").css({"display":"block"});
		tamano3();
		$(window).resize(function tamano3_3(){
			var tamanoW3 = $(window).width();
			$("#popup3").css({"width":tamanoW3+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH3 = Number(tamanoW3 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup3").css("height",tamanoH3+"px");
		});
	});
	function tamano3(){
		var tamanoW3 = $(window).width();
		$("#popup3").css({"width":tamanoW3+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH3 = Number(tamanoW3 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup3").css("height",tamanoH3+"px");
	}
	$("#smart4").on("click",function(){
		var heightC4 = $(window).height();
		$("#contenedoravatar").css({"height":heightC4+"px"});
		$("#popup4").css({"display":"block"});
		tamano4();
		$(window).resize(function tamano4_4(){
			var tamanoW4 = $(window).width();
			$("#popup4").css({"width":tamanoW4+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH4 = Number(tamanoW4 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup4").css("height",tamanoH4+"px");
		});
	});
	function tamano4(){
		var tamanoW4 = $(window).width();
		$("#popup4").css({"width":tamanoW4+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH4 = Number(tamanoW4 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup4").css("height",tamanoH4+"px");
	}
	$("#smart5").on("click",function(){
		var heightC5 = $(window).height();
		$("#contenedoravatar").css({"height":heightC5+"px"});
		$("#popup5").css({"display":"block"});
		tamano5();
		$(window).resize(function tamano5_5(){
			var tamanoW5 = $(window).width();
			$("#popup5").css({"width":tamanoW5+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH5 = Number(tamanoW5 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup5").css("height",tamanoH5+"px");
		});
	});
	function tamano5(){
		var tamanoW5 = $(window).width();
		$("#popup5").css({"width":tamanoW5+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH5 = Number(tamanoW5 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup5").css("height",tamanoH5+"px");
	}
	$("#smart6").on("click",function(){
		var heightC6 = $(window).height();
		$("#contenedoravatar").css({"height":heightC6+"px"});
		$("#popup6").css({"display":"block"});
		tamano6();
		$(window).resize(function tamano6_6(){
			var tamanoW6 = $(window).width();
			$("#popup6").css({"width":tamanoW6+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH6 = Number(tamanoW6 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup6").css("height",tamanoH6+"px");
		});
	});
	function tamano6(){
		var tamanoW6 = $(window).width();
		$("#popup6").css({"width":tamanoW6+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH6 = Number(tamanoW6 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup6").css("height",tamanoH6+"px");
	}
	$("#smart7").on("click",function(){
		var heightC7 = $(window).height();
		$("#contenedoravatar").css({"height":heightC7+"px"});
		$("#popup7").css({"display":"block"});
		tamano7();
		$(window).resize(function tamano7_7(){
			var tamanoW7 = $(window).width();
			$("#popup7").css({"width":tamanoW7+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH7 = Number(tamanoW7 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup7").css("height",tamanoH7+"px");
		});
	});
	function tamano7(){
		var tamanoW7 = $(window).width();
		$("#popup7").css({"width":tamanoW7+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH7 = Number(tamanoW7 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup7").css("height",tamanoH7+"px");
	}
	$("#smart8").on("click",function(){
		var heightC8 = $(window).height();
		$("#contenedoravatar").css({"height":heightC8+"px"});
		$("#popup8").css({"display":"block"});
		tamano8();
		$(window).resize(function tamano8_8(){
			var tamanoW8 = $(window).width();
			$("#popup8").css({"width":tamanoW8+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH8 = Number(tamanoW8 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup8").css("height",tamanoH8+"px");
		});
	});
	function tamano8(){
		var tamanoW8 = $(window).width();
		$("#popup8").css({"width":tamanoW8+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH8 = Number(tamanoW8 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup8").css("height",tamanoH8+"px");
	}
	$("#smart9").on("click",function(){
		var heightC9 = $(window).height();
		$("#contenedoravatar").css({"height":heightC9+"px"});
		$("#popup9").css({"display":"block"});
		tamano9();
		$(window).resize(function tamano9_9(){
			var tamanoW9 = $(window).width();
			$("#popup9").css({"width":tamanoW9+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH9 = Number(tamanoW9 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup9").css("height",tamanoH9+"px");
		});
	});
	function tamano9(){
		var tamanoW9 = $(window).width();
		$("#popup9").css({"width":tamanoW9+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH9 = Number(tamanoW9 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup9").css("height",tamanoH9+"px");
	}
	$("#smart10").on("click",function(){
		var heightC10 = $(window).height();
		$("#contenedoravatar").css({"height":heightC10+"px"});
		$("#popup10").css({"display":"block"});
		tamano10();
		$(window).resize(function tamano10_10(){
			var tamanoW10 = $(window).width();
			$("#popup10").css({"width":tamanoW10+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH10 = Number(tamanoW10 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup10").css("height",tamanoH10+"px");
		});
	});
	function tamano10(){
		var tamanoW10 = $(window).width();
		$("#popup10").css({"width":tamanoW10+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH10 = Number(tamanoW10 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup10").css("height",tamanoH10+"px");
	}
	$("#smart11").on("click",function(){
		var heightC11 = $(window).height();
		$("#contenedoravatar").css({"height":heightC11+"px"});
		$("#popup11").css({"display":"block"});
		tamano11();
		$(window).resize(function tamano11_11(){
			var tamanoW11 = $(window).width();
			$("#popup11").css({"width":tamanoW11+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH11 = Number(tamanoW11 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup11").css("height",tamanoH11+"px");
		});
	});
	function tamano11(){
		var tamanoW11 = $(window).width();
		$("#popup11").css({"width":tamanoW11+"px",
			"background-size":"100%",
			"background-repeat":"no-repeat"
		});
		var tamanoH11 = Number(tamanoW11 / 2.22125813);
		//$("#contenedoravatar").css("height",tamanoH+"px");
		$("#popup11").css("height",tamanoH11+"px");
	}
	$("#smart1_2").on("click",function(){
		var heightC = $(window).height();
		$("#contenedoravatar").css({"height":heightC+"px"});
		$("#popup1").css({"display":"block"});
		tamano1();
		$(window).resize(function tamano1_1(){
			var tamanoW = $(window).width();
			$("#popup1").css({"width":tamanoW+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH = Number(tamanoW / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup1").css("height",tamanoH+"px");
		});
	});
	$("#smart2_2").on("click",function(){
		var heightC2 = $(window).height();
		$("#contenedoravatar").css({"height":heightC2+"px"});
		$("#popup2").css({"display":"block"});
		tamano2();
		$(window).resize(function tamano2_2(){
			var tamanoW2 = $(window).width();
			$("#popup2").css({"width":tamanoW2+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH2 = Number(tamanoW2 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup2").css("height",tamanoH2+"px");
		});
	});
	$("#smart3_2").on("click",function(){
		var heightC3 = $(window).height();
		$("#contenedoravatar").css({"height":heightC3+"px"});
		$("#popup3").css({"display":"block"});
		tamano3();
		$(window).resize(function tamano3_3(){
			var tamanoW3 = $(window).width();
			$("#popup3").css({"width":tamanoW3+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH3 = Number(tamanoW3 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup3").css("height",tamanoH3+"px");
		});
	});
	$("#smart4_2").on("click",function(){
		var heightC4 = $(window).height();
		$("#contenedoravatar").css({"height":heightC4+"px"});
		$("#popup4").css({"display":"block"});
		tamano4();
		$(window).resize(function tamano4_4(){
			var tamanoW4 = $(window).width();
			$("#popup4").css({"width":tamanoW4+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH4 = Number(tamanoW4 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup4").css("height",tamanoH4+"px");
		});
	});
	$("#smart5_2").on("click",function(){
		var heightC5 = $(window).height();
		$("#contenedoravatar").css({"height":heightC5+"px"});
		$("#popup5").css({"display":"block"});
		tamano5();
		$(window).resize(function tamano5_5(){
			var tamanoW5 = $(window).width();
			$("#popup5").css({"width":tamanoW5+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH5 = Number(tamanoW5 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup5").css("height",tamanoH5+"px");
		});
	});
	$("#smart6_2").on("click",function(){
		var heightC6 = $(window).height();
		$("#contenedoravatar").css({"height":heightC6+"px"});
		$("#popup6").css({"display":"block"});
		tamano6();
		$(window).resize(function tamano6_6(){
			var tamanoW6 = $(window).width();
			$("#popup6").css({"width":tamanoW6+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH6 = Number(tamanoW6 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup6").css("height",tamanoH6+"px");
		});
	});
	$("#smart7_2").on("click",function(){
		var heightC7 = $(window).height();
		$("#contenedoravatar").css({"height":heightC7+"px"});
		$("#popup7").css({"display":"block"});
		tamano7();
		$(window).resize(function tamano7_7(){
			var tamanoW7 = $(window).width();
			$("#popup7").css({"width":tamanoW7+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH7 = Number(tamanoW7 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup7").css("height",tamanoH7+"px");
		});
	});
	$("#smart8_2").on("click",function(){
		var heightC8 = $(window).height();
		$("#contenedoravatar").css({"height":heightC8+"px"});
		$("#popup8").css({"display":"block"});
		tamano8();
		$(window).resize(function tamano8_8(){
			var tamanoW8 = $(window).width();
			$("#popup8").css({"width":tamanoW8+"px",
				"background-size":"100%",
				"background-repeat":"no-repeat"
			});
			var tamanoH8 = Number(tamanoW8 / 2.22125813);
			//$("#contenedoravatar").css("height",tamanoH+"px");
			$("#popup8").css("height",tamanoH8+"px");
		});
	});
// ==================================================== JS RESOLUCIONES QUIENES SOMOS
	// var rqs = $(window).height();
	// $(".fondoqssmart").css({"height": rqs+"px"});


