class Productos {
	constructor(id, categoria, nombre, descripcion, precio, img) {
		this.id = id;
		this.categoria = categoria.toUpperCase();
		this.nombre = nombre.toUpperCase();
		this.descripcion = descripcion;
		this.precio = parseInt(precio);
		this.img = img;
	}
}
const productos = [
	{
		id: 1,
		categoria: "MOUSE",
		nombre: "CORSAIR HARPOON",
		descripcion:
			"RGB PRO Harpoon: Ratón Gaming para FPS/MOBA con sensor de 12.000 DPI y LED RGB. Corsair Harpoon RGB PRO es un ratón óptico para Gaming optimizado para FPS y MOBA. Rápido y ligero, también es sensible y preciso. Su buen agarre y perfecto deslizamiento lo hacen especialmente adecuado para sesiones de juego largas",
		precio: 4000,
		img: `./img/corsair.jpg`,
	},
	{
		id: 2,
		categoria: "MOUSE",
		nombre: "REDRAGON M710",
		descripcion:
			"Ideal para juegos FPS, la redragon M710 dispone de un sensor óptico Gaming con seguimiento de avanzada y detección de movimiento de alta velocidad de 5000 ppp para un control preciso. Offering On-The-Fly DPI conmutación de perfil y para que usted siempre que el derecho se mueve en cualquier situación de juego",
		precio: 3000,
		img: "./img/redragon.mouse.png",
	},
	{
		id: 3,
		categoria: "TECLADO",
		nombre: "ASUS RGB TUF GAMING K5",
		descripcion:
			"Interruptores táctiles TUF Gaming Mech-Brane con anti-ghosting y rollover de 24 teclas para un rendimiento más fiable y efectivo. Cinco zonas independientes de iluminación RGB Aura Sync que puedes sincronizar con el resto de dispositivos Aura.",
		precio: 7020,
		img: "./img/asus-teclado.jpg",
	},
	{
		id: 4,
		categoria: "MONITOR",
		nombre: "GIGABYTE EDGE IPS 27",
		descripcion: "Monitor 27 Gigabyte Gaming G27QC Curvo Edge QFHD 165Hz 1ms",
		precio: 120000,
		img: "./img/gigabyte-monitor.jpg",
	},
	{
		id: 5,
		categoria: "MONITOR",
		nombre: "LG 29",
		descripcion: "Monitor LG 29 UltraWide Full HD IPS",
		precio: 80000,
		img: "./img/monitor-lg.jpg",
	},
	{
		id: 6,
		categoria: "PROCESADOR",
		nombre: "AMD RYZEN 5 4500",
		descripcion: "Procesador AMD Ryzen 5 4500 + Wraith Stealth Cooler AM4 ",
		precio: 30000,
		img: "./img/ryzen5.jpg",
	},
	{
		id: 7,
		categoria: "PROCESADOR",
		nombre: "AMD RYZEN 9 5950x",
		descripcion:
			"Procesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler",
		precio: 160000,
		img: "./img/ryzen9.jpg",
	},
	{
		id: 8,
		categoria: "PROCESADOR",
		nombre: "INTEL CORE I9 12900KF",
		descripcion: "Procesador Intel Core i9 12900KF 5.2GHz Turbo Socket 1700",
		precio: 135000,
		img: "./img/intel.jpg",
	},
];
function comprar() {
	let opc = parseInt(
		prompt(`
    ZELDA GAMER - COMPRAS\n
    1.Buscar Producto
    2.Ver Catalogo
    3.Ver Carrito
    4.Volver al Menu`)
	);
	switch (opc) {
		case 1:
			buscarProducto();
			break;
		case 2:
			catalogo();
			break;
		case 3:
			carritoCompra();
			break;
		case 4:
			menu();
			break;
		default:
			alert("Error de tipeado");
			break;
	}
}
const carrito = [];
function buscarProducto() {
	let opc = parseInt(
		prompt(`
    Buscador\n
    1.Nombre de producto
    2.Categoria
    3.Precio`)
	);
	if (opc == 1) {
		let buscado = prompt("Buscar Producto");
		const resultado = productos.filter((art) =>
			art.nombre.includes(buscado.toUpperCase())
		);
		console.log(resultado);
		alert(`Se Encontraron ${resultado.length} Productos`);
		if (resultado.length == 0) {
			buscarProducto();
		}
		agregarCarrito(resultado);
	} else if (opc == 2) {
		let buscado = prompt("Buscar Categoria");
		const resultado = productos.filter((art) =>
			art.categoria.includes(buscado.toUpperCase())
		);
		console.log(resultado);
		alert(`Se Encontraron ${resultado.length} Productos`);
		if (resultado.length == 0) {
			buscarProducto();
		}
		agregarCarrito(resultado);
	} else if (opc == 3) {
		let opc1 = parseInt(
			prompt("Filtrar por Precio :\n1.Mayor a \n2.Menor a \n3.Precio Exacto")
		);
		if (opc1 == 1) {
			let buscado = parseInt(prompt("Ingrese el Monto :"));
			const resultado = productos.filter((art) => art.precio > buscado);
			console.log(resultado);
			alert(`Se Encontraron ${resultado.length} Productos`);
			if (resultado.length == 0) {
				buscarProducto();
			}
			agregarCarrito(resultado);
		} else if (opc1 == 2) {
			let buscado = parseInt(prompt("Ingrese el Monto :"));
			const resultado = productos.filter((art) => art.precio < buscado);
			console.log(resultado);
			alert(`Se Encontraron ${resultado.length} Productos`);
			if (resultado.length == 0) {
				buscarProducto();
			}
			agregarCarrito(resultado);
		} else if (opc1 == 3) {
			let buscado = parseInt(prompt("Ingrese el Monto :"));
			const resultado = productos.filter((art) => art.precio == buscado);
			console.log(resultado);
			alert(`Se Encontraron ${resultado.length} Productos`);
			if (resultado.length == 0) {
				buscarProducto();
			}
			agregarCarrito(resultado);
		}
	}
	comprar();
}
function catalogo() {
	let opc = parseInt(
		prompt(`
    Catalogo\n
    1.Ordenar por Categoria\n
    2.Ordenar por Nombre\n
    3.Ordenar por Precio`)
	);
	switch (opc) {
		case 1:
			productos.sort((a, b) => {
				if (a.categoria > b.categoria) {
					return 1;
				}
				if (a.categoria < b.categoria) {
					return -1;
				}
				return 0;
			});
			agregarCarrito(productos);
			console.log(productos);
			break;
		case 2:
			productos.sort((a, b) => {
				if (a.nombre > b.nombre) {
					return 1;
				}
				if (a.nombre < b.nombre) {
					return -1;
				}
				return 0;
			});
			agregarCarrito(productos);
			console.log(productos);
			break;
		case 3:
			let opc1 = parseInt(
				prompt(`
            Ordenar\n1.Mayor a Menor\n2.Menor a Mayor`)
			);
			if (opc1 == 1) {
				productos.sort((a, b) => b.precio - a.precio);
				agregarCarrito(productos);
				console.log(productos);
			} else if (opc1 == 2) {
				productos.sort((a, b) => a.precio - b.precio);
				agregarCarrito(productos);
				console.log(productos);
			}
	}
	comprar();
}
function carritoCompra() {
	if (carrito.length == 0) {
		alert("No tenes ningun productos \nanda a comprar");
		comprar();
	}
	carrito.forEach((art) => {
		alert(`
        Categoria : ${art.categoria}\n
        Nombre : ${art.nombre}\n
        Descripcion : ${art.descripcion}\n
        Precio : ${art.precio}`);
	});
	let opc = parseInt(
		prompt(`
    Carrito\n
    1.Seguir Comprando\n
    2.Finalizar Compra`)
	);
	if (opc == 1) {
		buscarProducto();
	} else if (opc == 2) {
		let opc1 = parseInt(
			prompt(`
        Finalizando Compra\n
        "Pago con Tarjeta Tiene Recargo de IVA"\n
        1.Pago en Efectivo
        2.Pago Debito o Credito
        3.Volver atras`)
		);
		caja(opc1);
	}
}
function caja(opc1) {
	const montoTotal = carrito.reduce((total, art) => total + art.precio, 0);
	if (opc1 == 1) {
		let opc2 = prompt(`
    Carrito Total\n
    Articulo ${carrito.length}
    Total : $${montoTotal}\n
    ¿Tenes un Codigo de Descuento?
    -Si
    -No`);
		if (opc2.toLowerCase() == "si") {
			let descuento = prompt("Ingrese Codigo"); //"ADANCODERHOUSE"
			if (descuento == "ADANCODERHOUSE") {
				alert(`
            Carrito Total\n
            Articulo ${carrito.length}
            Total : $${montoTotal} - 25% : $${
					(montoTotal * 25) / 100 - montoTotal
				}\n`);
			}
		}
		alert("Gracias por su compras\nHasta la proxima");
	} else if (opc1 == 2) {
		let opc = prompt(`
        Carrito Total\n
        Articulo ${carrito.length}
        Total : $${montoTotal * 1.21} + IVA\n
        ¿Tenes un Codigo de Descuento?
        -Si
        -No`);
		console.log(opc);
		if (opc.toLowerCase() == "si") {
			let descuento = prompt("Ingrese Codigo");
			//"ADANCODERHOUSE"
			console.log(descuento);
			if (descuento == "ADANCODERHOUSE") {
				alert(`
                Carrito Total\n
                Articulo ${carrito.length}
                Total : $${montoTotal * 1.21 - 3000} + IVA\n`);
			}
		}
		alert("Gracias por su compras\nHasta la proxima");
	}
}
//Funcion Creada porque se me hacia muy repetitiva
function agregarCarrito(resultado) {
	resultado.forEach((art) => {
		let agregar = prompt(
			`Nombre del Articulo : ${art.nombre}\nDescripcio del Articulo : ${art.descripcion}\nPrecio del Articulo : $${art.precio}\nCategoria : ${art.categoria}\n\nSumar al Carrito :\n-Si\n-No`
		);
		if (agregar.toLowerCase() == "si") {
			carrito.push(art);
		}
		console.log(carrito);
	});
}
function vender() {
	let opc = parseInt(
		prompt(`
    Vender\n
    1.Agregar Productos
    2.Eliminar Productos
    3.Ver Catalogo
    4.Volver al menu`)
	);
	switch (opc) {
		case 1:
			let cantidad = parseInt(prompt("Cuantos Productos vas a crear ?"));
			for (let i = 1; i <= cantidad; i++) {
				productos.push(
					new Productos(
						prompt("Categoria " + i),
						prompt("Nombre del producto " + i),
						prompt("Descripcion del producto " + i),
						prompt("Precio del producto " + i)
					)
				);
			}
			vender();
		case 2:
			let buscado = prompt("Buscar Producto");
			const resultado = productos.filter((art) =>
				art.nombre.includes(buscado.toUpperCase())
			);
			console.log(resultado);
			alert(`Se Encontraron ${resultado.length} Productos`);
			let opc1 = prompt(
				"Deseas Eliminar? \nIngresa el Nombre completo de lo contraio regresas atras"
			);
			const o = productos.findIndex((element) => {
				return element.nombre === opc1.toUpperCase();
			});
			productos.splice(o, 1);
			console.log(o);
			console.log(productos);
			alert("Eliminado");
			vender();
		case 3:
			catalogo();
		case 4:
			menu();
	}
}
function menu() {
	alert(`  BIENVENIDO A -ZELDA GAMER- `);
	let encededor = true;
	while (encededor) {
		let opc = parseInt(
			prompt(`
		 -ZEDA GAMER-\n
		1.Comprar Productos
		2.Vender Productos
		3.Ver Catalogo
		4.Salir
		`)
		);
		switch (opc) {
			case 1:
				comprar();
				break;
			case 2:
				vender();
				break;
			case 3:
				catalogo();
				break;
			case 4:
				encededor = false;
				break;
			default:
				alert("Igrese un digito valido");
				break;
		}
	}
}
const contenedor = document.getElementById("java");
console.log(contenedor);
productos.forEach((producto) => {
	console.log(contenedor);
	const article = document.createElement("article");
	article.classList.add("main-articulo");
	console.log(article);
	//Definimos el innerHTML del elemento con una plantilla de texto
	article.innerHTML = `
                    <div class="main-img">
                        <a href=""><img src=${producto.img} alt="Cuphead-free"></a>
                        <div class="articulo-compra">
                            <a href="#">Comprar</a>
                        </div>
                        <div class="descripcion-oculta">
                            <p class="descripcion-oculta">
                                ${producto.descripcion}
                            </p>
                        </div>
                    </div>
                    <div class="articulo-descripcion">
                        <p>
                            ${producto.nombre}
                        </p>
                        <p>
                            $${producto.precio}
                        </p>
                    </div>
    
`;
	contenedor.appendChild(article);
	console.log(article);
});
