import { useReducer, useEffect } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoReducer } from './TodoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Hacer los challenges',
		done: false,
	},
];

const initTodo = (initialState) => {
  // return JSON.parse(localStorage.getItem('todos')) || initialState;
};

const TodoApp = () => {
	const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

	const handleAddTodo = (newTodo) => {
		dispatchTodo({
			type: 'add',
			payload: newTodo,
		});
  };
  
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos])
  

	return (
		<>
			<h1>
				TodoApp: {todos.length},{' '}
				<small>
					{' '}
					Pendientes: {todos.filter((todo) => todo.done == false).length}
				</small>
			</h1>
			<hr />
			<div className='row px-3'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						dispatchTodo={dispatchTodo}
					/>
				</div>
				<TodoAdd handleAddTodo={handleAddTodo} />
			</div>
		</>
	);
};

export default TodoApp;
