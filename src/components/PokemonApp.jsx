import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemons/thunks';

export const PokemonApp = () => {
	const { pokemons } = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);
	return (
		<div className='d-flex flex-column align-items-center'>
			<h1>Pokemon App</h1>
			{pokemons.map((pokemon) => (
				<div key={pokemon.name}>{pokemon.name}</div>
			))}
		</div>
	);
};
