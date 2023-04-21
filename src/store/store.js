import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from '../api/todosApi'
import { pokemonSlice } from './slices/pokemons/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
  })