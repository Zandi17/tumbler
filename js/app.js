window.addEventListener("load", function (){
	cargaPagina();
	var bitacora = document.getElementById("addpub");
	var enlaces = document.createElement("div");
	var titulo = document.createElement("h5");
	var texto = document.createElement("img");
	var cita = document.createElement("img");
	var meme = document.createElement("img");
	var pastilla = document.createElement("img");
	var publicacion = document.createElement("div");
	var titulopub = document.createElement("Input");
	var textArea = document.createElement("textarea");
	var cerrar = document.createElement("button");
	var publicar = document.createElement("button");

	function cargaPagina () {
		var boton = document.getElementById("publicar");
		boton.addEventListener("click",function(){
			boton.classList.add("ocultar");
			var crea = crearEnlace();
			agregarPub(crea);
		});
	}
	function crearEnlace(){
		enlaces.classList.add("tarjeta");
		bitacora.insertBefore(enlaces,bitacora.children[0]);
		enlaces.insertBefore(titulo,enlaces.childNodes[0]);
		var txt = document.createTextNode("Escoge tu tipo publicacion");
		titulo.appendChild(txt);
		texto.setAttribute("src","imagenes/texto.png");
		enlaces.insertBefore(texto,enlaces.childNodes[1]);
		cita.setAttribute("src","imagenes/cita.png");
		enlaces.appendChild(cita,enlaces.children[1]);
		meme.setAttribute("src","imagenes/enlace.png");
		enlaces.appendChild(meme,enlaces.childNodes[1]);
		pastilla.setAttribute("src","imagenes/pastilla.png");
		enlaces.appendChild(pastilla,enlaces.childNodes[1]);
		enlaces.setAttribute("style","");
		return enlaces;
	};

		texto.addEventListener("click",function(){
			aparecePub();
		});

		cita.addEventListener("click",function(){
			aparecePub();
		});

		meme.addEventListener("click",function(){
			aparecePub();
		});

		pastilla.addEventListener("click",function(){
			aparecePub()
		});
		cerrar.addEventListener("click", function(){
			var tipo = crearEnlace();
			agregarPub(tipo);
			enlaces.setAttribute("style", "");
		});

		publicar.addEventListener("click",function(){
			publicacion.classList.add("ocultar");
			imprimirPost();
		})
	function crearPub(){
		publicacion.setAttribute("style", "");
		publicacion.classList.add("publi");
		
		titulopub.setAttribute("placeholder", "titulo");
		publicacion.appendChild(titulopub,publicacion.childNodes[0]);
		
		publicacion.appendChild(textArea,publicacion.childNodes[1]);
		
		cerrar.classList.add("waves-effect","waves-light","btn")
		var txtcerrar = document.createTextNode("Cerrar");
		cerrar.appendChild(txtcerrar);
		publicacion.insertBefore(cerrar, publicacion.childNodes[2]);
		
		publicar.classList.add("waves-effect","waves-light","btn")
		var txtpublicar = document.createTextNode("Publicar");
		publicar.appendChild(txtpublicar);
		publicacion.appendChild(publicar, publicacion.childNodes[2]);
		return publicacion;
	}
	function agregarPub(greek){
		var agregarPub = document.getElementById("pub");
		agregarPub.appendChild(greek);
		return agregarPub;
	}
	function agregar(p){
		var entrada = document.getElementById("imprimir")
		entrada.appendChild(p);
		return agregar;
	}
	function aparecePub(aparece){
		var salida = crearPub();
		agregar(salida);
	}
});	

	function imprimirPost() {
		var imprimirPost = document.getElementById("imprimirPost");
		imprimirPost.classList.add("caja"); 
	}

	// function main(){
	// 	var addTaskButton = document.getElementById("add-task");
	// 	addTaskButton.addEventListener("click", onClickAddTask);		
	// }

	// function onClicpublicar(e){
	// 	e.preventDefault();

	// 	var text = getTextareaValue();
	// 	if(text != "" && text.length <= 140){
	// 	var newTask	= createTask(text);
	// 	addTaskToContainer(newTask);
	// 	} else {
	// 	alert(" Ingresa texto entre 0 y 140 caracteres");
	// 	}
	// }
	// function getTextareaValue(){
	// 	var textArea = document.getElementByClassName("textarea");
	// 	return textarea.value;
	// }
	// function createTask(text){
	// 	var newTask = document.createElement("div");
	// 	newTask.innerHTML = text;
	// 	return newTask;
	// }

	// function addTaskToContainer(task){
	// 	var addContainer = document.getElementById("addContainer");
	// 	// addContainer.insertBefore(task,addContainer.children[0]);
	// 	addContainer.appendChild(task);
	// };