import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], handleComplete, handleDelete}) => {
	return (
		<ul className='list-group'>
			{todos.map((todo, i) => (
				<TodoItem
					key={todo.id}
					index={i}
					todo={todo}
					handleComplete={handleComplete}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};
