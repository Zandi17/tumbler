window.addEventListener("load",function() {
	
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
				Post();
				break;
			case "cita":
				Cita();					
				break;
			case "meme":
				Meme();						
				break;
			case "pastilla":
				Pastilla();							
				break;
		}
	}
	function Post(texto, horaPub) {
		this.texto = texto,
		this.horaPub = horaPub,
		this.publicar = function(){

			var contenedor = document.createElement("div");
			var textareaTexto  = document.createElement("textarea");
			var botonCerrar = document.createElement("button");
			var botonPublicar = document.createElement("button");

			contenedor.setAttribute("id", "contenedor");
			textareaTexto.setAttribute("placeholder","Texto");

			textareaTexto.classList.add("textareaTexto");
			botonCerrar.classList.add("botonCerrar");
			botonPublicar.classList.add("botonPublicar");

			contenedor.appendChild(textareaTexto);
			contenedor.appendChild(botonCerrar);
			contenedor.appendChild(botonPublicar);

			cajaSelector.insertBefore(contenedorOpcion, cajaSelector.children[1]);
			contenedorOpcion.appendChild(contenedor);
			botonPublicar.addEventListener("click", publicar);
			botonCerrar.addEventListener("click", cerrar);
		}
	}
	function Texto(titulo) {
		post.call(this,texto,horaPub);
		this.titulo = titulo,
		this.publicar = function(){
			var textoInput = document.createElement("input");
			textoInput.setAttribute("placeholder","Titulo");
			botonCerrar.textContent = "Cerrar";
			botonPublicar.textContent = "publicar";
			textoInput.classList.add("textoInput");
			textareaTexto.classList.add("textareaTexto");
			contenedor.appendChild(textoInput);
		}
	}
	Texto.prototype = Object.create(Post.prototype);
	function Cita(autor){
		Post.call(this,texto,horaPub);
		this.autor = autor,
		this.publicar = function(){
			var textoInput = document.createElement("input");
			textoInput.setAttribute("placeholder","Autor");
			textoInput.classList.add("textoInput");
			contenedor.appendChild(textoInput);
		}
	}
	Cita.prototype = Object.create(Post.prototype);
	function Meme(){
		Post.call(this,texto,horaPub);
		this.publicar = function(){
		}
	}
	Meme.prototype = Object.create(Post.prototype);
	function Pastilla(color){
		Post.call(this,texto,horaPub);
		this.color = color,
		this.publicar = function(){
			var textoInput = document.createElement("input");
			textoInput.setAttribute("type","color");
			textoInput.classList.add("textoInput");
			contenedor.appendChild(textoInput)
		}
	}
	Pastilla.prototype = Object.create(Post.prototype);
	

	var PostTexto = new Texto();
	var PostCita = new Cita();
	var PostMeme = new	Meme();
	var PostPastilla = new Pastilla();
	
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
});