<?php 
// codigo en el php que recibe los datos del formulario
// nombre de quien envía el correo
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
// direccion que recibe el mensaje
$para = "info@rmasb.com";
// asunto del mensaje
$asunto = utf8_decode("Información página web R + B Diseño Experimental");
// cabeceras del mensaje
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
// direccion de envio del mensaje
$cabeceras .= 'From: '. $nombre . ' - ' . $correo . "\r\n";
// direccion con copia
//$cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
// direccion con copia oculta
//$cabeceras .= 'Bcc: ' . $dir_email . "\r\n";
// en este espacio se puede colocar el replay o responder a
// correo de quien envía el formulario

// mensaje del formulario
$mensaje = $_POST['mensaje'];

// Envio de correo electronico a los involucrados en la solicitud

if (mail($para, $asunto, $mensaje, $cabeceras)) {
	echo "funciona";
}
?>