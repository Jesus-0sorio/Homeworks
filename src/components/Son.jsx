import { memo } from 'react';

// El componente se vuelve a generar cuando el padre se vuelve a generar
export const Son = memo(({ numero, increment }) => {
	console.log('  Me volví a generar :(  ');
	return (
		<button
			className='btn btn-primary mr-3'
			onClick={() => increment(numero)}>
			{numero}
		</button>
	);
});
