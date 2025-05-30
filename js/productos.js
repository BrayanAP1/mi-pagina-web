// Datos de productos actualizados
const productos = [
  {
    id: 1,
    titulo: "Acetaminofén",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://olimpica.vtexassets.com/arquivos/ids/609083/7707193640282.jpg?v=637626507005570000",
    categoria: "medicamentos",
    precio: 8500
  },
  {
    id: 2,
    titulo: "Ibuprofeno",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://ortopedicosfuturoco.vtexassets.com/arquivos/ids/159985/IBUPROFENO-CAP-BLAN-800MG-CJAX30-UND-MK-81001066-1.jpg?v=638153043617170000",
    categoria: "medicamentos",
    precio: 12000
  },
  {
    id: 3,
    titulo: "Amoxicilina",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBTahPL2pv5n1bg2Qcu8YPGRaneF6BxlQYw&s",
    categoria: "medicamentos",
    precio: 15000
  },
  {
    id: 4,
    titulo: "Loratadina",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://www.droguerialaeconomia.com/economia/site/img/1x/020141.jpg",
    categoria: "medicamentos",
    precio: 7500
  },
  {
    id: 5,
    titulo: "Omeprazol",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://colsubsidio.vteximg.com.br/arquivos/ids/204934/OMEPRAZOL%2020MG%20CDR%20CJX10%20EAN%207702605102044.png.png?v=638799757152600000",
    categoria: "medicamentos",
    precio: 9800
  },
  {
    id: 6,
    titulo: "Salbutamol",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://www.drogueriascafam.com.co/49476-large_default/comprar-en-cafam-salbutamol-100-mcg-caja-con-frasco-inhalacion-con-200-dosis-suspension-precio.jpg",
    categoria: "medicamentos",
    precio: 22000
  },
  {
    id: 7,
    titulo: "Losartán",
    descripcion: "Desinfección rápida y segura.",
    imagen: "https://www.drogueriascafam.com.co/50572-large_default/comprar-en-cafam-losartan-50-mg-caja-con-30-comprimidos-recubiertos-precio.jpg",
    categoria: "medicamentos",
    precio: 18000
  },
  {
    id: 8,
    titulo: "Metformina",
    descripcion: "Alivio eficaz para dolor y fiebre.",
    imagen: "https://pymstatic.com/43895/conversions/metformina-wide_webp.webp",
    categoria: "medicamentos",
    precio: 12500
  },
  {
    id: 9,
    titulo: "Vitamina C",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://olimpica.vtexassets.com/arquivos/ids/1050317/7702057700119.jpg?v=638126776014500000",
    categoria: "vitaminas",
    precio: 25000
  },
  {
    id: 10,
    titulo: "Vitamina D3",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ndm/ndm02585/l/43.jpg",
    categoria: "vitaminas",
    precio: 32000
  },
  {
    id: 11,
    titulo: "Complejo B",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://colsubsidio.vteximg.com.br/arquivos/ids/190013/7703153043322.jpg?v=638274931629200000",
    categoria: "vitaminas",
    precio: 28000
  },
  {
    id: 12,
    titulo: "Vitamina E",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrt/nrt01751/y/30.jpg",
    categoria: "vitaminas",
    precio: 22000
  },
  {
    id: 13,
    titulo: "Multivitamínicos",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ncs/ncs67942/y/8.jpg",
    categoria: "vitaminas",
    precio: 45000
  },
  {
    id: 14,
    titulo: "Ácido fólico",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://olimpica.vtexassets.com/arquivos/ids/614277/7702184010020.jpg?v=637626518959970000",
    categoria: "vitaminas",
    precio: 15000
  },
  {
    id: 15,
    titulo: "Hierro (sulfato ferroso)",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://www.drogueriascafam.com.co/40347/comprar-en-cafam-sulfato-ferroso-200-mg-caja-con-250-grageas-precio.jpg",
    categoria: "vitaminas",
    precio: 18000
  },
  {
    id: 16,
    titulo: "Calcio + Vitamina D",
    descripcion: "Refuerza el sistema inmunológico.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLzNmDG981YsKaz-yjahXByoR3x141YoXtw&s",
    categoria: "vitaminas",
    precio: 38000
  },
  {
    id: 17,
    titulo: "Toma de presión arterial y glucosa",
    descripcion: "Agenda tu cita con un profesional.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DW5ip41XQA2LLvRLgU1iO1v6fWBUn1MuRw&s",
    categoria: "servicios",
    precio: 8000
  },
  {
    id: 18,
    titulo: "Aplicación de inyecciones",
    descripcion: "Controla tu salud de forma preventiva.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj-ggXdBzPIcgsAjH2Z4EA0MxwGUgeI_g25eQM8ZW4xtu01gEgc0YPujOsbR2jweesY0&usqp=CAU",
    categoria: "servicios",
    precio: 5000
  },
  {
    id: 19,
    titulo: "Asesoría farmacéutica",
    descripcion: "Controla tu salud de forma preventiva.",
    imagen: "https://www.asefarma.com/wp-content/uploads/2024/04/consulta-al-farmaceutico.jpg",
    categoria: "servicios",
    precio: 0 // Servicio gratuito
  }
];

// Variables del carrito
let carrito = [];
let total = 0;

// Elementos del DOM
const productosContainer = document.getElementById('productos-container');
const carritoBtn = document.getElementById('carrito-btn');
const modalCarrito = document.getElementById('modal-carrito');
const carritoItems = document.getElementById('carrito-items');
const carritoTotal = document.getElementById('carrito-total');
const carritoContador = document.getElementById('carrito-contador');
const cerrarModal = document.querySelector('.cerrar-modal');
const btnComprar = document.querySelector('.btn-comprar');
const filtros = document.querySelectorAll('.filtro-btn');

// Cargar productos
function cargarProductos(categoria = 'todos') {
  productosContainer.innerHTML = '';
  
  const productosFiltrados = categoria === 'todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoria);
  
  productosFiltrados.forEach(producto => {
    const productoElement = document.createElement('div');
    productoElement.className = 'producto';
    productoElement.dataset.categoria = producto.categoria;
    
    productoElement.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <h3>${producto.titulo}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="precio">$${producto.precio.toLocaleString()}</p>
      <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
    `;
    
    productosContainer.appendChild(productoElement);
  });
  
  // Agregar eventos a los botones
  document.querySelectorAll('.btn-agregar').forEach(btn => {
    btn.addEventListener('click', agregarAlCarrito);
  });
}

// Función para agregar productos al carrito
function agregarAlCarrito(e) {
  const id = parseInt(e.target.dataset.id);
  const producto = productos.find(p => p.id === id);
  
  // Verificar si el producto ya está en el carrito
  const productoEnCarrito = carrito.find(item => item.id === id);
  
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      titulo: producto.titulo,
      precio: producto.precio,
      cantidad: 1
    });
  }
  
  // Actualizar total y contador
  total += producto.precio;
  actualizarCarrito();
  
  // Mostrar feedback visual
  e.target.textContent = '¡Agregado!';
  setTimeout(() => {
    e.target.textContent = 'Agregar al carrito';
  }, 1000);
}

// Función para actualizar el carrito
function actualizarCarrito() {
  // Actualizar contador
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
  carritoContador.textContent = cantidadTotal;
  
  // Actualizar modal
  carritoItems.innerHTML = '';
  
  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p>Tu carrito está vacío</p>';
    carritoTotal.textContent = '0';
    return;
  }
  
  carrito.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'carrito-item';
    itemElement.innerHTML = `
      <div class="item-info">
        <h4>${item.titulo}</h4>
        <p>$${item.precio.toLocaleString()} x ${item.cantidad}</p>
      </div>
      <div class="item-subtotal">
        <p>$${(item.precio * item.cantidad).toLocaleString()}</p>
        <button class="btn-eliminar" data-id="${item.id}">🗑️</button>
      </div>
    `;
    
    carritoItems.appendChild(itemElement);
  });
  
  // Actualizar total
  carritoTotal.textContent = total.toLocaleString();
  
  // Agregar eventos a los botones de eliminar
  document.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', eliminarDelCarrito);
  });
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(e) {
  const id = parseInt(e.target.dataset.id);
  const itemIndex = carrito.findIndex(item => item.id === id);
  
  if (itemIndex !== -1) {
    const item = carrito[itemIndex];
    
    // Restar del total
    total -= item.precio * item.cantidad;
    
    // Eliminar del carrito
    carrito.splice(itemIndex, 1);
    
    // Actualizar carrito
    actualizarCarrito();
  }
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  cargarProductos();
  
  // Filtros
  filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
      filtros.forEach(f => f.classList.remove('active'));
      filtro.classList.add('active');
      cargarProductos(filtro.dataset.categoria);
    });
  });
  
  // Carrito
  carritoBtn.addEventListener('click', () => {
    modalCarrito.style.display = 'block';
  });
  
  cerrarModal.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
  });
  
  btnComprar.addEventListener('click', () => {
    if (carrito.length > 0) {
      alert(`¡Compra realizada por $${total.toLocaleString()}! Gracias por tu compra.`);
      carrito = [];
      total = 0;
      actualizarCarrito();
      modalCarrito.style.display = 'none';
    } else {
      alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    }
  });
  
  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (e.target === modalCarrito) {
      modalCarrito.style.display = 'none';
    }
  });
});