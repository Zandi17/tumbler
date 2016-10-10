window.addEventListener("load", cargaPagina);

	var cajaSelector = document.getElementById("cajaSelector");
	var selector = document.getElementById("selector");
	var contenedorOpcion = document.createElement("div");
	var contenedorPublicacion = document.createElement("div");

	function cargaPagina (){
		selector.addEventListener("change", seleccionarOpcion);
	}

	function seleccionarOpcion (){
		var selectorValor = selector.value;
		switch(selectorValor){
			case "texto":
				texto();

				break;
			case "cita":
				cita();					
				break;
			case "meme":
				meme();						
				break;
			case "pastilla":
				pastilla();							
				break;
		}
	}

	function texto(){
		var contenedor = document.createElement("div");
		var textoInput = document.createElement("input");
		var textareaTexto  = document.createElement("textarea");
		var botonCerrar = document.createElement("button");
		var botonPublicar = document.createElement("button");
		
		contenedor.setAttribute("id", "contenedor");
		textoInput.setAttribute("placeholder","Titulo");
		textareaTexto.setAttribute("placeholder","Texto");
		
		botonCerrar.textContent = "Cerrar";
		botonPublicar.textContent = "publicar";

		textoInput.classList.add("textoInput");
		textareaTexto.classList.add("textareaTexto");
		botonCerrar.classList.add("botonCerrar");
		botonPublicar.classList.add("botonPublicar");
		
		cajaSelector.insertBefore(contenedorOpcion, cajaSelector.children[1]);
		contenedorOpcion.appendChild(contenedor);
		contenedor.appendChild(textoInput);
		contenedor.appendChild(textareaTexto);
		contenedor.appendChild(botonCerrar);
		contenedor.appendChild(botonPublicar);


		botonPublicar.addEventListener("click", publicar);
		botonCerrar.addEventListener("click", cerrar);
	}
	function cita() {
		var contenedor = document.createElement("div");
		var textareaTexto  = document.createElement("textarea");
		var textoInput = document.createElement("input");
		var botonCerrar = document.createElement("button");
		var botonPublicar = document.createElement("button");
		
		contenedor.setAttribute("id", "contenedor");
		textareaTexto.setAttribute("placeholder","Texto");
		textoInput.setAttribute("placeholder","Autor");
		
		botonCerrar.textContent = "Cerrar";
		botonPublicar.textContent = "Publicar";

		textareaTexto.classList.add("textareaTexto");
		textoInput.classList.add("textoInput");
		botonCerrar.classList.add("botonCerrar");
		botonPublicar.classList.add("botonPublicar");
		

		cajaSelector.insertBefore(contenedorOpcion,cajaSelector.children[1]);
		contenedorOpcion.appendChild(contenedor);
		contenedor.appendChild(textoInput);
		contenedor.appendChild(textareaTexto);
		contenedor.appendChild(botonCerrar);
		contenedor.appendChild(botonPublicar);


		botonPublicar.addEventListener("click", publicar);
		botonCerrar.addEventListener("click", cerrar);
	}
	function meme() {
		var contenedor = document.createElement("div");
		var textoInput  = document.createElement("input");
		var meme = document.createElement("img");
		var botonCerrar = document.createElement("button");
		var botonPublicar = document.createElement("button");
		var valor = textoInput.value;
		
		contenedor.setAttribute("id", "contenedor");
		textoInput.setAttribute("placeholder","link");
		meme.src = valor;
		
		botonCerrar.textContent = "Cerrar";
		botonPublicar.textContent = "Publicar";

		textoInput.classList.add("textoInput");
		botonCerrar.classList.add("botonCerrar");
		botonPublicar.classList.add("botonPublicar");

		cajaSelector.insertBefore(contenedorOpcion,cajaSelector.children[1]);
		contenedorOpcion.appendChild(contenedor);
		contenedor.appendChild(textoInput);
		contenedor.appendChild(botonCerrar);
		contenedor.appendChild(botonPublicar);


		botonPublicar.addEventListener("click", publicar);
		botonCerrar.addEventListener("click", cerrar);
	}
	function pastilla() {
		var contenedor = document.createElement("div");
		var textareaTexto  = document.createElement("textarea");
		var textoInput = document.createElement("input");
		var botonCerrar = document.createElement("button");
		var botonPublicar = document.createElement("button");
		
		contenedor.setAttribute("id", "contenedor");
		textareaTexto.setAttribute("placeholder","Texto");
		textoInput.setAttribute("type","color");
		
		botonCerrar.textContent = "Cerrar";
		botonPublicar.textContent = "Publicar";

		textareaTexto.classList.add("textareaTexto");
		textoInput.classList.add("textoInput");
		botonCerrar.classList.add("botonCerrar");
		botonPublicar.classList.add("botonPublicar");
		
		cajaSelector.insertBefore(contenedorOpcion,cajaSelector.children[1]);
		contenedorOpcion.appendChild(contenedor);
		contenedor.appendChild(textareaTexto);
		contenedor.appendChild(textoInput);
		contenedor.appendChild(botonCerrar);
		contenedor.appendChild(botonPublicar);

		botonPublicar.addEventListener("click", publicar);
		botonCerrar.addEventListener("click", cerrar);
	}

	function cerrar () {
		this.parentElement.classList.add("ocultar");

	}

	function publicar () {
		var h2 = document.createElement("h2");
		var p = document.createElement("p");
		var divPub = document.createElement("div");
		var divHora = document.createElement("div");
		var horaPub = fechaPub();
		var botonEliminar = document.createElement("button");

		var titulo = this.parentElement.children[0].value;
		var texto = this.parentElement.children[1].value;

		h2.innerText = titulo;
		p.innerText = texto;
		divHora.innerText = horaPub;
		botonEliminar.textContent = "Eliminar";

		cajaSelector.appendChild(contenedorPublicacion);
		contenedorPublicacion.appendChild(divPub);
		divPub.appendChild(h2);
		divPub.appendChild(p);
		divPub.appendChild(divHora);
		divPub.appendChild(botonEliminar);

		botonEliminar.addEventListener("click", eliminar);
	}
	function eliminar () {
		this.parentElement.remove();
	}

	function fechaPub () {
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		var segundo = fecha.getSeconds();
		return hora + ":" + minuto + ":" + segundo;
	}
	function limpiarCampos () {
	}

	function crearElementos () {
	}

	function validarCampos (){
	}


