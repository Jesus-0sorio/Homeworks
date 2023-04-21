import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	increment,
	incrementBy,
} from '../store/slices/counterSlice';

export const Counter = () => {
	const number = useRef(0);
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleIncrementBy = () => {
		dispatch(incrementBy(number.current.value || 0));
		number.current.value = 0;
	};
	return (
		<>
			<h1 className='text-center'>App</h1>
			<hr />
			<div className='p-3 d-flex flex-column align-items-center w-25 mx-auto'>
				<p>Counter is: {counter}</p>
				<div className='d-flex gap-1 w-100'>
					<button
						className='btn btn-primary w-100'
						onClick={() => dispatch(increment())}>
						Increment
					</button>
					<button
						className='btn btn-danger w-100'
						onClick={() => dispatch(decrement())}>
						Decrement
					</button>
				</div>
				<input
					ref={number}
					type='number'
					className='mt-2 me-2 w-100'
				/>
				<button
					onClick={handleIncrementBy}
					className='btn btn-primary mt-2 w-100'>
					Sumar
				</button>
			</div>
		</>
	);
};
