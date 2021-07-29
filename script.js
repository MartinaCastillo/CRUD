//Sweet alert de agregar

$('#agregar').click(function(){
    var titulo = $('#title').val();
    var precio = $('#price').val();
    var descrip = $('#description').val();
    var url_im = $('#image').val();
    var categ = $('#category').val();
    
    if(titulo == '' || precio == ''|| descrip == ''|| url_im == ''|| categ == '' ){
        Swal.fire({
            title: 'Espera!',
            text: 'Por favor, complete todos los campos',
            icon: 'warning',
            button: 'Ok',
        });
    }else{
        Swal.fire({
            title: 'Cambios realizados con exito!',
            text: 'Se han guardado los cambios',
            icon:'success',
        })
    }
});

//definicion de la tabla
$('#table').bootstrapTable({
    pagination: true,
    search: true,
    showFullscreen: true,
    showColumns: true,
    columns: [{
        field: 'id',
        title: 'id'
    }, {
        field: 'title',
        title: 'title'
    }, {
        field: 'price',
        title: 'price'
    }
        , {
        field: 'description',
        title: 'description'
    }],
})
//Peticion GET para obtener todos los productos
$.ajax({
    // la URL para la petición
    url: 'https://fakestoreapi.com/products',

    // especifica el tipo de petición
    type: 'GET',

    // el tipo de información que se espera de respuesta
    dataType: 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (json) {
        console.log("Petición GET:", '\n', json);

        //cargar los datos obtenidos en la tabla
        $('#table').bootstrapTable('load', json);
    },
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            alert('Disculpe, existió un problema con la petición GET');
        },
        beforeSend : function() {
            $("#content").html('<img src="loading.gif">');
        },

    });

//funcion para agregar
$("#agregar").click(function () {
    if(document.getElementById("title").value=="" || document.getElementById("price").value==""|| document.getElementById("description").value==""|| document.getElementById("image").value==""|| document.getElementById("category").value==""){
        alert("Todos los campos del form agregar producto son obligatorios");
    }else{
    //agarra los valores del form
    console.log("Valores del form agregar:", '\n', $("#formAgregar").serialize());
    //Peticion POST - Para agregar un producto
    $.ajax({
        // la URL para la petición
        url: 'https://fakestoreapi.com/products',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: $("#formAgregar").serialize(),

        // especifica el tipo de petición
        type: 'POST',


        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log("Petición POST:", '\n', json);

        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            alert('Disculpe, existió un problema con la petición POST');
        },

    });
};
});

//funcion para modificar
$("#modificar").click(function () {
    if(document.getElementById("idProduct").value=="" || document.getElementById("titleM").value=="" || document.getElementById("priceM").value==""|| document.getElementById("descriptionM").value==""|| document.getElementById("imageM").value==""|| document.getElementById("categoryM").value==""){
        alert("Todos los campos del form editar producto son obligatorios");
    }else{
        console.log("Valores del form editar:", '\n', $("#formModificar").serialize());
        //Peticion PUT- Para modificar un producto
        $.ajax({
            // la URL para la petición
            url: 'https://fakestoreapi.com/products/' + document.getElementById("idProduct").value,
    
    
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: $("#formModificar").serialize(),
    
            // especifica el tipo de petición
            type: 'PUT',
    
            // el tipo de información que se espera de respuesta
            dataType: 'json',
    
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (json) {
                console.log("Petición PUT:", '\n', json);
            },
    
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                alert('Disculpe, existió un problema con la petición PUT');
            },
    
        });
    }

});

//funcion para eliminar
$("#eliminar").click(function () {
    if(document.getElementById("idProductE").value==""){
        alert("El id del producto a eliminar es obligatorio");
    }else{
        console.log("Valores del form eliminar:", '\n', document.getElementById("idProductE").value);
        //Peticion DELETE- Para eliminar un producto
        $.ajax({
            // la URL para la petición
            url: 'https://fakestoreapi.com/products/' + document.getElementById("idProductE").value,
    
            // especifica el tipo de petición
            type: 'DELETE',
    
            // el tipo de información que se espera de respuesta
            dataType: 'json',
    
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (json) {
                console.log("Petición DELETE:", '\n', json);
            },
    
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                alert('Disculpe, existió un problema con la petición DELETE');
            },
    
        });
    }
    
   
});