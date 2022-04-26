document.querySelector('#searchButton').addEventListener('click', function(e){
	document.querySelector('.habilities').value = '';
	const search = document.querySelector('#searchInput').value;
	if(search){
		searchPokemon(search);
	}else{
		getPokemons();
	}
	
});

document.querySelector('.habilities').addEventListener('change', function(e){
	document.querySelector('#searchInput').value = '';
	const search = this.value;
	if(search){
		searchPokemonByHability(search);
	}else{
		getPokemons();
	}
	
});
