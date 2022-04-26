let containerList = document.querySelector('.container-list');

let containerListHab = document.querySelector('.habilities');
function setPokemons(dataPokemons){
	containerList.innerHTML = '';
	let cadenaNew ='';
	dataPokemons.forEach((pokemon,i) => {
		cadenaNew += templatePokemon(pokemon,i+1);
	});
	containerList.innerHTML = cadenaNew;
}


function templatePokemon(pokemon,index){
	return `
	<div class="col-xl-3 col-sm-6 col-12 mt-2">
		<div class="card border-0 shadow-sm">
			<div class="card-body">
				<div class="row">
					<div class="col-xl-4 col-4 p-2">
						<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" width="150px">
					</div>	
					<div class="col-xl-7 col-7 ">
						<h3 class="text-primary my-3">${pokemon.name}</h3>
						<p>Lorem ipsum dolor sit, amet consectetur adipisici</p>
						<button class="btn btn-primary btn-sm mt-3">Atrapar</button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	`
}

function setHabilities(dataHabilities){
	containerListHab.innerHTML = '';
	let cadenaNew ='<option value="">Ordenar por habilidad</option>';
	dataHabilities.forEach((pokemon,i) => {
		cadenaNew += templateHability(pokemon,i+1);
	});
	containerListHab.innerHTML = cadenaNew;
}

function templateHability(hability,index){
	return `
	 <option value="${index}">${hability.name}</option>
	`
}