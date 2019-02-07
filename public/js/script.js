$(document).ready(function(){
    $('#alert').hide();
    $(".btn-delete").click(function(e){         //se usa tipo btn para la clase utilizada
        e.preventDefault();                     //captar el click en delete
        /*if (!confirm("¿Está seguro de eliminar?")) {
            return false;
        }*/
        
        var row     = $(this).parents('tr');        //para localizar al padre del formulario
        var form    = $(this).parents('form');      //es util porque se usa el atributo que se encuentra ahi
        var url     = form.attr('action');          //action es donde se graba la url
                
        $('#alert').show();                         //mensaje de alerta

        //USO DE AJAX
        $.post(url, form.serialize(), function(result){ //Paso de parametro
            row.fadeOut();                              //desaparecer columna
            $('#products-total').html(result.total);    //actualizar valor, porque estaba recibiendo de json del controlador
            $('#alert').html(result.message);           //mensaje correspondiente
        }).fail(function(){                             //caso de falla
            $('#alert').html("algo salió mal");
        });
    });
});