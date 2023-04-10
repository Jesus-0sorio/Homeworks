import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], dispatchTodo }) => {
	return (
		<ul className='list-group'>
			{todos.map((todo, i) => (
				<TodoItem
					key={todo.id}
					index={i}
					todo={todo}
					dispatchTodo={dispatchTodo}
				/>
			))}
		</ul>
	);
};
