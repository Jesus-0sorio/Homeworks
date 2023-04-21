import { useState } from 'react';
import { useGetTodoIdQuery } from '../api/todosApi';

export const TodoApp = () => {
	const [id, setId] = useState(1);
	const { data = [], isLoading } = useGetTodoIdQuery(id);
  const handlePage = (num) => {
    return num < 1 ? setId(1) : setId(num);
	};
	return (
		<div className='d-flex flex-column text-center'>
			<div>
				<h1>Todo App ID</h1>
				<br />
				<h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
				<li>{data?.title}</li>
				<button onClick={() => handlePage(id - 1)}>Prev</button>
				<button onClick={() => handlePage(id + 1)}>Next</button>
			</div>
		</div>
	);
};
