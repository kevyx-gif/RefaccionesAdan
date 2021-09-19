const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.currentTarget.querySelector(".contenido-opcion").querySelector(".textos") === null){
			contenidoSelect.innerHTML = e.currentTarget.querySelector(".contenido-opcion").querySelector(".textos3").innerHTML;
		}
		else{
			contenidoSelect.innerHTML = e.currentTarget.querySelector(".contenido-opcion").querySelector(".textos").innerHTML;
		}
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});


//////////////////////////////////////////////////////////////
//Segundo SelectBox

const select2 = document.querySelector('#select2');
const opciones2 = document.querySelector('#opciones2');
const contenidoSelect2 = document.querySelector('#select2 .contenido-select');
const hiddenInput2 = document.querySelector('#inputSelect2');

document.querySelectorAll('#opciones2 > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e2) => {
		e2.preventDefault();
		if(e2.currentTarget.querySelector(".contenido-opcion").querySelector(".textos") === null){
			contenidoSelect2.innerHTML = e2.currentTarget.querySelector(".contenido-opcion").querySelector(".textos3").innerHTML;
		}
		else{
			contenidoSelect2.innerHTML = e2.currentTarget.querySelector(".contenido-opcion").querySelector(".textos").innerHTML;
		}
		
		console.log(contenidoSelect2);
		select2.classList.toggle('active');
		opciones2.classList.toggle('active');
		hiddenInput2.value = e2.currentTarget.querySelector('.titulo').innerText;
	});
});

select2.addEventListener('click', () => {
	select2.classList.toggle('active');
	opciones2.classList.toggle('active');
});

//////////////////////////////////////////////////////////////
//Tercer SelectBox

const select3 = document.querySelector('#select3');
const opciones3 = document.querySelector('#opciones3');
const contenidoSelect3 = document.querySelector('#select3 .contenido-select');
const hiddenInput3 = document.querySelector('#inputSelect3');

document.querySelectorAll('#opciones3 > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect3.innerHTML = e.currentTarget.querySelector(".contenido-opcion").querySelector(".textos3").innerHTML;
		select3.classList.toggle('active');
		opciones3.classList.toggle('active');
		hiddenInput3.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select3.addEventListener('click', () => {
	select3.classList.toggle('active');
	opciones3.classList.toggle('active');
});
