import React from 'react';

export const TodoItem = ({ index, todo, handleComplete, handleDelete }) => {

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
					onClick={() => handleComplete(todo)}>
					Completar
				</button>
				<button
					className='btn btn-danger'
					onClick={() => handleDelete(todo)}>
					Borrar
				</button>
			</div>
		</li>
	);
};
