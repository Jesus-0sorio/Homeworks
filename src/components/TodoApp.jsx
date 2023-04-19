import { useTODO } from '../hooks/useTODO';
import { TodoReducer } from './TodoReducer';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Hacer los challenges',
		done: false,
	},
];

const initTodo = () => {
	return JSON.parse(localStorage.getItem('todos')) || initialState;
};

const TodoApp = () => {
	const { handleAddTodo, todos, handleComplete, handleDelete } = useTODO(
		TodoReducer,
		initialState,
		initTodo
	);

	return (
		<>
			<h1>
				TodoApp: {todos?.length},{' '}
				<small>
					{' '}
					Pendientes: {todos?.filter((todo) => todo.done == false).length}
				</small>
			</h1>
			<hr />
			<div className='row px-3'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleComplete={handleComplete}
						handleDelete={handleDelete}
					/>
				</div>
				<TodoAdd handleAddTodo={handleAddTodo} />
			</div>
		</>
	);
};

export default TodoApp;
