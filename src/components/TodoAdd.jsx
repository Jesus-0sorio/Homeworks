import {useRef} from 'react'

export const TodoAdd = ({ handleAddTodo }) => {
	const inputRef = useRef();

	const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim().length <= 1) return;
		const newTodo = {
			id: new Date().getTime(),
			desc: inputRef.current.value,
			done: false,
    };
		handleAddTodo(newTodo);
		inputRef.current.value = '';
	};

	return (
		<div className='col-5'>
			<h4>Agregar TODO</h4>
			<hr />
			<form>
				<input
					type='text'
					name='description'
					className='form-control'
					placeholder='Aprender...'
					autoComplete='off'
          ref={inputRef}
				/>
				<button
					onClick={handleSubmit}
					className='btn btn-outline-primary mt-1 btn-block'>
					Agregar
				</button>
			</form>
		</div>
	);
};
