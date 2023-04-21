import { useGetTodosQuery } from '../api/todosApi';

export const TodosApp = () => {
	const { data = [], isLoading } = useGetTodosQuery();
	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<h1>TodosApp</h1>
			<br />
			<h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
			<pre>
				{data.map((todo, key) => {
					return <li key={key}>{todo.title}</li>;
				})}
			</pre>
		</div>
	);
};
