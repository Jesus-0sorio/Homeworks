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
			<div className='p-3'>
				<p>Counter is: {counter}</p>
				<div className='d-flex gap-1'>
					<button
						className='btn btn-primary'
						onClick={() => dispatch(increment())}>
						Increment
					</button>
					<button
						className='btn btn-danger'
						onClick={() => dispatch(decrement())}>
						Decrement
					</button>
				</div>
				<input
					ref={number}
					type='number'
					className='mt-2 me-2'
				/>
				<button
					onClick={handleIncrementBy}
					className='btn btn-primary'>
					Sumar
				</button>
			</div>
		</>
	);
};
