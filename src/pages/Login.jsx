import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Login = () => {
	const { user, setUser, setlogged } = useContext(UserContext);
	const navigate = useNavigate();
	const name = useRef(null);
	const onLogin = () => {
		setUser({
			id: 313,
			name: name.current.value,
			email: 'correo@correo',
		});
		setlogged(true);
		const lastPath = localStorage.getItem('lastPath') || '/';
		navigate(lastPath, {
			replace: true,
		});
	};
	return (
		<div className='d-flex justify-content-center align-items-center h-auto'>
			<form>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputEmail1'
						className='form-label'>
						Nombre
					</label>
					<input
						ref={name}
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'>
						Contreseña
					</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword1'
					/>
				</div>
				<button
					onClick={onLogin}
					type='submit'
					className='btn btn-primary w-100'>
					Ingresar
				</button>
			</form>
		</div>
	);
};

export default Login;
