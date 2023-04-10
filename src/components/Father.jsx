import { useCallback, useState } from 'react';
import { Son } from './Son';

export const Father = () => {
	const list = [2, 4, 6, 8, 10];
	const [value, setValue] = useState(0);

	// useCallback se utiliza para evitar la creación de una nueva función
	const increment = useCallback((num) => {
		setValue((value) => value + num);
	}, []);

	return (
		<div className='p-3'>
			<h1>Padre</h1>
			<p>Total: {value}</p>
			<hr />
			{list.map((num) => (
				<Son
					key={num}
					numero={num}
					increment={increment}
				/>
			))}
		</div>
	);
};
