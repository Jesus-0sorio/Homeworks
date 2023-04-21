import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoading } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());

		const res = await pokemonApi.get(
			`pokemon?limit=10&offset=${page * 10}`
		);

		dispatch(
			setPokemons({
				pokemons: res.data.results,
				page: page + 1,
			})
		);
	};
};
