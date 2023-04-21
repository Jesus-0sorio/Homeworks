import { Route, Routes } from 'react-router-dom';
import { PriveteRoutes } from '../components/PriveteRoutes';
import { UserRoutes } from '../components/UserRoutes';
import Login from '../pages/Login';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='login'
				element={<Login />}
			/>
			<Route
				path='/*'
				element={
					<PriveteRoutes>
						<UserRoutes />
					</PriveteRoutes>
				}
			/>
		</Routes>
	);
};
