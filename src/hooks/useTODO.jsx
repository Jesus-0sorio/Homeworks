import { useEffect, useReducer } from 'react';

export const useTODO = (TodoReducer, initialState, initTodo) => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState, initTodo);

	const handleAddTodo = (newTodo) => {
		dispatchTodo({
			type: 'add',
			payload: newTodo,
		});
	};

	const handleComplete = (todo) => {
		dispatchTodo({
			type: 'complete',
			payload: todo.id,
		});
	};

	const handleDelete = (todo) => {
		dispatchTodo({
			type: 'delete',
			payload: todo.id,
		});
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return { handleAddTodo, todos, handleComplete, handleDelete };
};
