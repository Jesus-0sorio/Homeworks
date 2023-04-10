import React from 'react';

export const TodoItem = ({ index, todo, dispatchTodo }) => {
	const handleComplete = () => {
		dispatchTodo({
			type: 'complete',
			payload: todo.id,
		});
	};

	const handleDelete = () => {
		dispatchTodo({
			type: 'delete',
			payload: todo.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between'>
			<span
				className={`align-self-center ${
					todo.done ? 'text-decoration-line-through' : ''
				}`}>
				{index + 1}. {todo.desc}
			</span>
			<div>
				<button
					className='btn btn-success me-1'
					onClick={handleComplete}>
					Completar
				</button>
				<button className='btn btn-danger' onClick={handleDelete}>Borrar</button>
			</div>
		</li>
	);
};
