// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarProductos();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}


async function cargarProductos() {
  const request = await fetch('api/listarProductos', {
    method: 'GET',
    headers: getHeaders()
  });
  const productos = await request.json();


  let listadoHtml = '';
  for (let prod of productos) {
    let botonEliminar = '<a href="#" onclick="eliminarProduct(' + prod.id + ')" class="btn btn-danger ">Eliminar<i class="fas fa-trash"></i></a>';
    let botonModificar= '<a href="productoForm.html?id='+prod.id+'"    class="btn btn-info ">Modficar <i class="fas fa-info"></i></a>';
  
    prod.fechaEntrada = prod.fechaEntrada.slice(0, 10);
    prod.fechaVenta = prod.fechaVenta.slice(0, 10);
  
    let usuarioHtml = '<tr><td>'+prod.id+'</td> <td>' + prod.clave + ' </td><td> ' + prod.nombreProducto + '</td><td>'
                    + prod.sucursal+'</td><td>'+prod.telefono
                    + '</td><td>'+ prod.fechaEntrada  +'  </td> <td>'+prod.fechaVenta +'</td> <td>'+prod.vendedor 
                    
                    + '</td><td>'+ botonModificar  + botonEliminar + '</td></tr>';
    listadoHtml += usuarioHtml;
  }

document.querySelector('#productos tbody').outerHTML = listadoHtml;

}

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function eliminarProduct(id) {

  if (!confirm('¿Desea eliminar este usuario?')) {
    return;
  }

 const request = await fetch('api/eliminaProducto/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });
  if (request.ok) {
	  location.reload();
  }else{
	  alert("Error al eliminar el producto!");	
  }	   

  
}



