// const form = document.querySelector('#formu');
// const bar = document.querySelector('#searchUser');

// window.addEventListener('load', () => {
// 	form.addEventListener('submit', buscarUser);
// })


// function buscarUser(e) {
// 	e.preventDefault();

// 	// const barValue = document.querySelector('#search').value;

// 	cargarUser()
// }


// const cargarUser = async () => {
	
// 	try {
// 		const respuesta = await fetch(`https://api.github.com/users/${bar.value}`);

// 		const datos = await respuesta.json();
// 		console.log(datos);
// 		let users = ``;

// 		datos.forEach(user => {
// 			users += `
// 			<div class="userInfo">
//             <img class="avatar" src="${user.avatar_url}" alt="user avatar">
// 			<h3 class="inside"> <strong> Id: </strong> ${user.id}</h3>
// 			<h3 class="inside"> <strong> Name: </strong> ${user.login}</h3>
// 			<p class="inside"> <strong> Company </strong> ${user.company}</p>
// 			<p class="inside"> <strong> Email:  </strong> ${user.email}</p>
// 			<p class="inside"> <strong> Repos </strong> ${user.public_repos}</p>
// 			<p class="inside"> <strong> Followers:  </strong> ${user.followers}</p>
// 			<p class="inside"> <strong> Created:  </strong> ${user.created_at}</p>
// 			<p class="inside"> <strong> Updated at: </strong> ${user.updated_at}</p>
// 			<a href="${user.organizations_url}" class="inside"> Organizations </a>
// 			<a href="${user.events_url}" class="inside"> Events User </a>
			
// 			</div>
// 			`;

			
// 		});

// 		document.getElementById('contenedorUser').innerHTML = users;


// 	}catch(error){
// 		console.log(error);
// 	}
// }

// cargarUser();