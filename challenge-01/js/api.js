
function getPokemons(){
	fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
	.then(response => response.json())	
	.then(data => setPokemons(data.results))
	.catch(data => setPokemons([]))	
}
function searchPokemon(search){
	fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
	.then(response => response.json())	
	.then(data =>setPokemons([data]))
	.catch(data => setPokemons([]))	;	
}

function searchPokemonByHability(hab){
	fetch(`https://pokeapi.co/api/v2/ability/${hab}`)
	.then(response => response.json())	
	.then(data =>{
		let poke = data.pokemon.map(p=>({name:p.pokemon.name}));
		setPokemons(poke)
	})
	.catch(data => setPokemons([]))	;	
}
function getHabilities(){
	fetch(`https://pokeapi.co/api/v2/ability`)
	.then(response => response.json())	
	.then(data => setHabilities(data.results))
	.catch(data => setHabilities([]))	;	
	
}

getPokemons();
getHabilities();
