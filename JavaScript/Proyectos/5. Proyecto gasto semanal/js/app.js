//variables

const presupuestoUsuario = prompt("¿Cula es tu presupuesto semanal?");

const botonAgregar = document.getElementById("boton-agregar");

let cantidadPresupuesto;
let interfaz;

//clases
//clase de presupuesto
class Presupuesto {
	constructor(presupuesto) {
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
	}
	//Metodo para ir restando de presupuesto actual
	presupuestoRestante(cantidad = 0) {
		return (this.restante -= Number(cantidad));
	}
}

class Interfaz {
	mostrarGastos(listaGastos, gasto, cantidad) {
		listaGastos.innerHTML += `<il class="list-group-item d-flex justify-content-between align-items-center">
        ${gasto}<span class='badge badge-primary badge-pill'>$${cantidad}</span></il>
        `;
	}
	mostrarPresupuesto() {
		let totalPresupuesto = document.getElementById("total");
		totalPresupuesto.innerHTML = cantidadPresupuesto.presupuesto;
	}
	mostrarRestante(cantidad = 0) {
		let campoResto = document.getElementById("restante");
		let resto = cantidadPresupuesto.presupuestoRestante(cantidad);
		campoResto.innerHTML = resto;
		this.comprobarRestante();
	}
	comprobarRestante() {
		if (
			resto <=
			cantidadPresupuesto.presupuesto -
				cantidadPresupuesto.presupuesto * 0.75
		) {
			campoResto.parentElement.parentElement.className =
				"alert alert-danger";
		} else if (
			resto <=
			cantidadPresupuesto.presupuesto -
				cantidadPresupuesto.presupuesto * 0.5
		) {
			campoResto.parentElement.parentElement.className =
				"alert alert-warning";
		}
	}

	mensaje() {
		const div = document.createElement("div");

		div.classList.add("mensaje", "alert", "alert-danger");
		let formulario = document.querySelector(".contenido");
		div.innerHTML = `Completar todos los campos`;
		formulario.insertBefore(div, formulario.children[1]);

		setTimeout(function () {
			document.querySelector(".mensaje").remove();
		}, 3000);
	}
}

//event listeners

eventListeners();

function eventListeners() {
	//cuando carga la pagina
	document.addEventListener("DOMContentLoaded", function () {
		if (presupuestoUsuario === null || presupuestoUsuario === "") {
			window.location.reload();
		} else {
			cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
			interfaz = new Interfaz();
			interfaz.mostrarPresupuesto();
			interfaz.mostrarRestante();
		}
	});

	//para mostra los gastos
	botonAgregar.addEventListener("click", function (e) {
		e.preventDefault();
		const listaGastos = document.querySelector("#gastos ul");
		const gasto = document.getElementById("gasto").value;
		const cantidad = document.getElementById("cantidad").value;

		if (gasto === "" || cantidad === "") {
			interfaz.mensaje();
		} else {
			interfaz.mostrarRestante(cantidad);
			interfaz.mostrarGastos(listaGastos, gasto, cantidad);
		}
	});
}
