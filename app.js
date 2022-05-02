// let pagina = 1;
// const btnAnterior = document.getElementById('btnAnterior');
// const btnSiguiente = document.getElementById('btnSiguiente');

// btnSiguiente.addEventListener('click', () => {
// 	if(pagina < 1000){
// 		pagina += 1;
// 		cargarPeliculas();
// 	}
// });

// btnAnterior.addEventListener('click', () => {
// 	if(pagina > 1){
// 		pagina -= 1;
// 		cargarPeliculas();
// 	}
// });

// const cargarPeliculas = async() => {
// 	try {
// 		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);

// 		console.log(respuesta);

// 		// Si la respuesta es correcta
// 		if(respuesta.status === 200){
// 			const datos = await respuesta.json();

// 			let peliculas = '';
// 			datos.results.forEach(pelicula => {
// 				peliculas += `
// 					<div class="pelicula">
// 						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
// 						<h3 class="titulo">${pelicula.title}</h3>
// 					</div>
// 				`;
// 			});

// 			document.getElementById('contenedor').innerHTML = peliculas;

// 		} else if(respuesta.status === 401){
// 			console.log('Pusiste la llave mal');
// 		} else if(respuesta.status === 404){
// 			console.log('La pelicula que buscas no existe');
// 		} else {
// 			console.log('Hubo un error y no sabemos que paso');
// 		}

// 	} catch(error){
// 		console.log(error);
// 	}

// }

// cargarPeliculas();
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click', () => {
	if (pagina < 1000) {
		pagina += 1;
		cargarRepos();
	}
});
btnAnterior.addEventListener('click', () => {
	if (pagina > 1) {
		pagina -= 1;
		cargarRepos();
	}
});
const form = document.querySelector('#form');
const bar = document.querySelector('#search');

window.addEventListener('load', () => {
	form.addEventListener('submit', buscarRepos);
})


function buscarRepos(e) {
	e.preventDefault();

	// const barValue = document.querySelector('#search').value;

	cargarRepos(bar)
}


const cargarRepos = async () => {
	
	try {
		const respuesta = await fetch(`https://api.github.com/users/${bar.value}/repos?page=${pagina}&per_page=6`);

		const datos = await respuesta.json();
		console.log(datos);
		let repos = ``;

		datos.forEach(repo => {
			repos += `
			<div class="repo">
			<h3 class="inside"> <strong> Id: </strong> ${repo.id}</h3>
			<h3 class="inside"> <strong> Name: </strong> ${repo.name}</h3>
			<p class="inside"> <strong> Description: </strong> ${repo.description}</p>
			<p class="inside"> <strong> Language: </strong> ${repo.language}</p>
			<a href="${repo.url}" class="inside"> ${repo.url} </a>
			</div>
			`;

			
		});

		document.getElementById('contenedor').innerHTML = repos;


	}catch(error){
		console.log(error);
	}
}

cargarRepos();