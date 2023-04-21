import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext'

export const ProductsPage = () => {
	const { id } = useParams();
	const [params] = useSearchParams();
	const { setlogged } = useContext(UserContext)
	const navigate = useNavigate();

	const onLogout = () => {
		setlogged(false)
		navigate('/login', {
			replace: true,
		});
	};
	return (
		<div>
			Products Page {id || 1} {params.get('sort')}
			<button onClick={onLogout}>Logout</button>
		</div>
	);
};
