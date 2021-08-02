

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
    $('#tableU').bootstrapTable({
        pagination: true,
        search: true,
        showFullscreen: true,
        showColumns: true,
        columns: [{
            field: 'username',
            title: 'username'
        }, {
            field: 'email',
            title: 'email'
        }, {
            field: 'phone',
            title: 'phone'
        }
            , {
            field: 'id',
            title: 'id'
        }],
    })
    $.ajax({
        // la URL para la petición
        url: 'https://fakestoreapi.com/users',
    
        // especifica el tipo de petición
        type: 'GET',
    
        // el tipo de información que se espera de respuesta
        dataType: 'json',
    
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log("Petición GET:", '\n', json);
    
            //cargar los datos obtenidos en la tabla
            $('#tableU').bootstrapTable('load', json);
        },
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                alert('Disculpe, existió un problema con la petición GET');
            },
           
        }); 
//funcion para agregar
$("#agregar").click(function () {
    if(document.getElementById("title").value=="" || document.getElementById("price").value==""|| document.getElementById("description").value==""|| document.getElementById("image").value==""|| document.getElementById("category").value==""){
        //sweet alert para cuando faltan campos que completar
        Swal.fire({
            title: 'Espera!',
            text: 'Por favor, complete todos los campos',
            icon: 'warning',
            button: 'Ok',
        });
    }else{
        //sweet alert de exito
       
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
        success:  
        Swal.fire({
            title: 'Producto agregado correctamente!',
            text: 'Se han guardado los cambios',
            icon:'success',
        }),
        function (json) {
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
        Swal.fire({
            title: 'Espera!',
            text: 'Por favor, complete todos los campos',
            icon: 'warning',
            button: 'Ok',
        });    }else{
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
            success:
            Swal.fire({
                title: 'Modificacion exitosa!',
                text: 'Se ha modificado el producto',
                icon:'success',
            }),
            function (json) {
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
        //sweet alert faltan campos que completar
        Swal.fire({
            title: 'Espera!',
            text: 'Por favor, complete todos los campos',
            icon: 'warning',
            button: 'Ok',
        });
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
            success: 
            Swal.fire({
                title: 'Eliminacion exitosa!',
                text: 'Se ha eliminado el producto',
                icon:'success',
            }),
            function (json) {
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