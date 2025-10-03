const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000.25,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

let cargarproductos = (prod = productos) => {
  let contenido = "";

  prod.forEach((elemento, id) => {
    contenido += /*html*/ `<div>
        <img src="images/${elemento.imagen}" alt="${elemento.nombre}" />
        <h3>${elemento.nombre}</h3>
        <p>${elemento.precio}</p>
        <button type="button" onclick="mostrarModal(${id})">
          Ver detalle del producto
        </button>
        <button type="button" onclick="agregaralcarrito(${id})">
        Agregar al carrito
        </button>
      </div>`;
  });

  document.getElementById("mostrar-catalogo").innerHTML = contenido;
};

let agregaralcarrito = (id) => {
  let carritolist = localStorage.getItem("carrito");
  if (carritolist == null) {
    carritolist = [];
  } else {
    carritolist = JSON.parse(carritolist);
  }
  carritolist.push(id);
  console.log(carritolist);
  localStorage.setItem("carrito", JSON.stringify(carritolist));
};

let mostrarModal = (id) => {
  document.getElementById("titulo-producto").innerText = productos[id].nombre;
  document.getElementById("descripcion-producto").innerText =
    productos[id].description;
  document.getElementById("modal").style.display = "block";
};

let cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

let cargarcarrito = () => {
  let carritolist = localStorage.getItem("carrito");

  let contenido = "";

  if (carritolist == null) {
    contenido = "<div> Su carrito esta vacio.</div>";
  } else {
    carritolist = JSON.parse(carritolist);
    carritolist.forEach((num, id) => {
      contenido += /*html*/ `<div>
      <h3>${productos[num].nombre}</h3>
      <p>${productos[num].precio}</p>
      <button type="button" onclick="eliminarproducto(${id})">Eliminar producto</div>`;
    });
    contenido += /*html*/ `<button type="button" onclick="vaciarcarrito()">Vaciar Carrito</button>`;
  }
  document.getElementById("mostrar-carrito").innerHTML = contenido;
};

let eliminarproducto = (id) => {
  let carritolist = localStorage.getItem("carrito");
  carritolist = JSON.parse(carritolist);
  carritolist.splice(id, 1);

  if (carritolist.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carritolist));
  } else {
    localStorage.removeItem("carrito");
  }
  window.location.reload();
};

let vaciarcarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
};

let filtrarproductos = () => {
  let searchword = document.getElementById("search").value;
  let min = document.getElementById("minimo").value;
  let max = document.getElementById("maximo").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;

  let newlista = productos;

  if (searchword) {
    newlista = newlista.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(searchword.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchword.toLowerCase())
    );
  }

  if (min) {
    newlista = newlista.filter((prod) => prod.precio >= min);
  }

  if (max) {
    newlista = newlista.filter((prod) => prod.precio >= max);
  }

  if (marca !== "Todas") {
    newlista = newlista.filter((prod) => prod.marca === marca);
  }

  let category = [];
  prot ? category.push("Protectores") : "";
  entr ? category.push("Entrenamiento") : "";
  dob ? category.push("Dobok") : "";

  if (category.length > 0) {
    newlista = newlista.filter((prod) => category.includes(prod.categoria));
  }

  cargarproductos(newlista);
};
