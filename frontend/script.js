function mostrarFormulario(tipo) {
    document.querySelectorAll('.formulario').forEach(f => f.style.display = 'none');

    if (tipo === 'registrar') {
        document.getElementById('formularioRegistrar').style.display = 'block';
    } else if (tipo === 'consultar') {
        consultarProductos();
        document.getElementById('tablaProductos').style.display = 'block';
    }
}

function closeForm() {
    document.querySelectorAll('.formulario').forEach(f => f.style.display = 'none');
}

// Registrar producto
function registerProduct() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;

    if (nombre && precio && cantidad) {
        fetch('/registerProduct', {
            method: 'POST',
            body: new URLSearchParams({ 
                nombre: String(nombre), 
                precio: String(precio), 
                cantidad: String(cantidad) 
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            closeForm();
        });
    } else {
        alert('Por favor, complete todos los campos.');
    }
}


// Consultar productos
function consultProduct() {
    fetch('/mostrarProductos')
        .then(res => res.json())
        .then(data => {
            let tbody = document.getElementById('productosTable').getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';
            data.productos.forEach(p => {
                let row = tbody.insertRow();
                row.innerHTML = `
                    <td>${p.id}</td>
                    <td>${p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>${p.cantidad}</td>
                `;
            });
        });
}

// Eliminar producto
function deletProduct() {
    let ID = prompt("Ingrese el ID del producto que desea eliminar:");
    if (ID) {
        fetch('/eliminarProducto', {
            method: 'POST',
            body: new URLSearchParams({ ID })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            consultarProductos();
        });
    }
}

// Generar reporte (puede personalizarse)
function generarReporte() {
    window.print();
}º


// ...existing code...
function consultarProductos() {
    // Aquí iría el código para consultar y mostrar productos
    console.log("Función consultarProductos llamada");
}
// ...existing code...
// filepath: frontend/script.js
