import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export const PriveteRoutes = ({ children }) => {
	const { user, logged } = useContext(UserContext);
	const { pathname, search } = useLocation();
	localStorage.setItem('lastPath', `${pathname}${search}`);
	if (!logged) {
		return <Navigate to='login' />;
	}

	return user ? children : <>Error 403</>;
};
