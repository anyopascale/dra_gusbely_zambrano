<?php

    $destino= "anyopascale@gmail.com";
    $nombre= $_POST("nombre");
    $correo= $_POST("correo");
    $asunto= $_POST("asunto");
    $mensaje= $_POST("mensaje");
    $contanido= "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;
    mail($destino, $asunto, $contanido);
    header("gracias.html");


?>