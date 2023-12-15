$(document).ready(function() {

	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var id = urlParams.get('id');

	console.log(id); // Imprimi consola
	var divBoton  = document.getElementById("idDivBoton");
	var aElement = document.createElement("a");
    aElement.setAttribute("href", "#");
    aElement.setAttribute("class", "btn btn-primary btn-user btn-block");
	if (id !== null) {
		cargaProducto(id);
    	  aElement.innerText = "Modificar Producto";
    	  aElement.setAttribute("onclick", "modificarProducto()");
    	  divBoton.appendChild(aElement);
	}else{
		 aElement.innerText = "Registrar Producto";
    	 aElement.setAttribute("onclick", "registrarProducto()");
    	 divBoton.appendChild(aElement);
	}

});


async function cargaProducto(id) {
	const request = await fetch('api/obtenerProducto/' + id, {
		method: 'GET',
		headers: getHeaders()
	});
	const prod = await request.json();

	document.getElementById("idHiddenId").value = prod.id;

	document.getElementById("txtClave").value = prod.clave;
	document.getElementById("txtNombreProducto").value = prod.nombreProducto;
	document.getElementById("txtSucursal").value = prod.sucursal;
	document.getElementById("txtTelefono").value = prod.telefono;

	document.getElementById("txtFechaEntrada").value = prod.fechaEntrada.slice(0, 10);
	document.getElementById("txtFechaVenta").value = prod.fechaVenta.slice(0, 10);

	document.getElementById("selectVendedor").value = prod.vendedor;


}


async function registrarProducto() {
	let datos = {};

	datos.id = document.getElementById('idHiddenId').value;

	datos.clave = document.getElementById('txtClave').value;
	datos.nombreProducto = document.getElementById('txtNombreProducto').value;
	datos.sucursal = document.getElementById('txtSucursal').value;
	datos.telefono = document.getElementById('txtTelefono').value;
	datos.fechaEntrada = document.getElementById('txtFechaEntrada').value;
	datos.fechaVenta = document.getElementById('txtFechaVenta').value;
	datos.vendedor = document.getElementById('selectVendedor').value;


	const request = await fetch('api/registrarProducto', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	
	if (request.ok) {	 
	 window.location.href = 'productos.html';
	 setTimeout(function() {
        alert("El producto fue creado con éxito!");
      }, 2000); // Espera 1000 milisegundos (1 segundo) antes de mostrar la alerta
    }else{
	  alert("Error al crear el producto!");	
    }	  
	
}

async function modificarProducto() {
	let datos = {};

	datos.id = document.getElementById('idHiddenId').value;

	datos.clave = document.getElementById('txtClave').value;
	datos.nombreProducto = document.getElementById('txtNombreProducto').value;
	datos.sucursal = document.getElementById('txtSucursal').value;
	datos.telefono = document.getElementById('txtTelefono').value;
	datos.fechaEntrada = document.getElementById('txtFechaEntrada').value;
	datos.fechaVenta = document.getElementById('txtFechaVenta').value;
	datos.vendedor = document.getElementById('selectVendedor').value;


	const request = await fetch('api/modificarProducto', {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	if (request.ok) {
	  window.location.href = 'productos.html';	
	 setTimeout(function() {
	 alert("El producto fue modificado con éxito!");
	 }, 2000); // Espera 1000 milisegundos (1 segundo) antes de mostrar la alerta
	
    }else{
	  alert("Error al actualizar el producto!");	
    }	   
	

}


function getHeaders() {
	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': localStorage.token
	};
}


