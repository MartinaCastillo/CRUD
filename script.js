// const data = [];

// function buildTable() {
//     $('#tabla').bootstrapTable({
//         pagination: true,
//   search: true,
//         columns: [{
//             field: 'id', // nombre del field in JS
//             title: 'Id' // el contenido del TD que se va a mostrar.
//         }, {
//             field: 'title',
//             title: 'Titulo'
//         }, {
//             field: 'completed',
//             title: 'Completado'
//         }],
//         data
//     });
// }

document.getElementById('formulario').addEventListener('submit', addTodo);

function addTodo(event) {
    event.preventDefault(); // detiene el evento. POST: Server. -> HTTP POST
    const form = event.currentTarget;
    const data = [{
        title: form.querySelector('[name="title"]').value,
        id: ++(Array.from(document.querySelector('#tabla tbody').querySelectorAll('tr')).length),
        completed: false
    }];
    $('#tabla').bootstrapTable('append', data);
    form.reset();
    if (Swal === undefined) return;
    Swal.fire(
        'Completado',
        'Se ha agregado tu tarea :D',
        'success'
    );
}

document.querySelector('[data-alert="modificar"]').addEventListener('click', onModify);

function onModify() {
    if (Swal === undefined) return;
    Swal.fire({
        title: 'Modificar Producto',
        html:`<input type="text" id="id" class="swal2-input" placeholder="Ingrese su id">
        <input type="text" id="cambio" class="swal2-input" placeholder="Ingrese su modificacion">`,
        confirmButtonText: 'Cambiar',
        focusConfirm: false,
        preConfirm: () => {
            const id = Swal.getPopup().querySelector('#id').value
            const cambio = Swal.getPopup().querySelector('#cambio').value
            if (!id||!cambio){
                Swal.showValidationMessage('Por favor ingrese el id y la modificacion')
            }
            return {id:id,cambio:cambio}
        }
    }).then((result) =>{
        Swal.fire(`
        Id: ${result.value.id}
        Cambio: ${result.value.cambio}
        `.trim())
    })
}

document.querySelector('[data-alert="eliminar"]').addEventListener('click', onDelete);

function onDelete() {
    if (Swal === undefined) return;
    Swal.fire({
        title: 'Eliminar Producto',
        html:`<input type="text" id="id" class="swal2-input" placeholder="Ingrese su id">
        `,
        confirmButtonText: 'Eliminar',
        focusConfirm: false,
        preConfirm: () => {
            const id = Swal.getPopup().querySelector('#id').value
            return {id:id}
        }
    }).then((result) =>{
        Swal.fire(`
        Se eliminó el producto N°: ${result.value.id} 
        `.trim())
    })
}


