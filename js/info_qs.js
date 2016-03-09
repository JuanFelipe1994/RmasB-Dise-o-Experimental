function cambiarImagen (datos) {
	alert("Hola");
	var id_avatar = $(this).attr("id");
	id_avatar_div = id_avatar.split("avatar");

	$("#avatares li").each(function () {
		var id = $(this).attr("id");
		id_div = id.split("avatar");
		$(this).removeClass("avatar" + id_div[1] + "c");
	});

	$(this).addClass("avatar" + id_avatar_div[1] + "c");
	$(".img_template").attr("src", "img/txtsupuesto" + id_avatar_div[1] + ".png");
	$(".img_template").css("display", "block");
}

$("#avatares li").on("click", cambiarImagen);


// $("#avatar1").click(function(){
// 	$(this).css({
// 		"background":"url(img/c11.png)",
// 		"width":"72px",
// 		"height":"88px"
// 	});
// 	$(".template").children("#txt_avatar1").toggle();
// });