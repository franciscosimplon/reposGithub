
// let pagina = 1;
// const btnAnterior = document.getElementById('btnAnterior')
// const btnSiguiente = document.getElementById('btnSiguiente')

// btnSiguiente.addEventListener('click', () => {
// 	if (pagina < 1000) {
// 		pagina += 1;
// 		cargarRepos();
// 	}
// });
// btnAnterior.addEventListener('click', () => {
// 	if (pagina > 1) {
// 		pagina -= 1;
// 		cargarRepos();
// 	}
// });
// const form = document.querySelector('#form');
// const bar = document.querySelector('#search');

// window.addEventListener('load', () => {
// 	form.addEventListener('submit', buscarRepos);
// })


// function buscarRepos(e) {
// 	e.preventDefault();

// 	// const barValue = document.querySelector('#search').value;

// 	cargarRepos(bar)
// }


// const cargarRepos = async () => {
	
// 	try {
// 		const respuesta = await fetch(`https://api.github.com/users/${bar.value}/repos?page=${pagina}&per_page=4`);

// 		const datos = await respuesta.json();
// 		console.log(datos);
// 		let repos = ``;

// 		datos.forEach(repo => {
// 			repos += `
// 			<div class="repo">
// 			<h3 class="inside"> <strong> Id: </strong> ${repo.id}</h3>
// 			<h3 class="inside"> <strong> Name: </strong> ${repo.name}</h3>
// 			<p class="inside"> <strong> Description: </strong> ${repo.description}</p>
// 			<p class="inside"> <strong> Language:  </strong> ${repo.language}</p>
// 			<p class="inside"> <strong> Pushed_At: </strong> ${repo.pushed_at}</p>
// 			<p class="inside"> <strong> Created_At: </strong> ${repo.created_at}</p>
// 			<p class="inside"> <strong> Updated_At: </strong> ${repo.update_at}</p>
// 			<a href="${repo.url}" class="inside"> Repo info </a>
// 			// <a href="${repo.events_url} " class="inside">Events repo </a>
// 			// <a href="${repo.commits_url}" class="inside">Commits info,  </a>
// 			// <a href="${repo.pulls_url}" class="inside"> Pulls info </a>
// 			<a href="${repo.merges_url} " class="inside">Merges info  </a>
// 			</div>
// 			`;

			
// 		});

// 		document.getElementById('contenedor').innerHTML = repos;


// 	}catch(error){
// 		console.log(error);
// 	}
// }

// cargarRepos();