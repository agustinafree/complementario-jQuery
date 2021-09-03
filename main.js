//Jquery efectos y animaciones

// Las imagenes aparecen ocultas al principio
$("#wally1").hide();
$("#wallyfondo").hide();

//---fadeToggle----// COMIENZA A JUGAR! 
$('#muestraOculta').click(function(){
    $('#wallyfondo').fadeToggle(2000, function(){
        if ($('#muestraOculta').html() == '¡QUIERO JUGAR!') {
            $('#muestraOculta').html('No juego más');
        } else {
            $('muestraOculta').html("¡QUIERO JUGAR!");
        }
    });
});

//---SLIDE---// lo que quiero hacer es que Wally se superponga delante del fondo cuando se clikee el boton

$('#slideImagen').click(()=> {
    $('#wally1').slideDown('fast');
});
$('#slideImagenUp').click(()=> {
    $('#wally1').slideUp('slow');
});
