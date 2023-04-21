import { Route, Routes } from 'react-router-dom';
import { NavComponent } from '../components/NavComponent';
import About from '../pages/About';
import Home from '../pages/Home';
import { Profile } from '../pages/Profile';
import { ProductsPage } from './ProductsPage';

export const UserRoutes = () => {
	return (
		<>
			<NavComponent />
			<h1>Main app</h1>
			<hr />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='profile'
					element={<Profile />}
				/>
				<Route
					path='products'
					element={<ProductsPage />}>
					<Route
						path=':id'
						element={<ProductsPage />}
					/>
				</Route>
				<Route
					path='about'
					element={<About />}
				/>
				<Route
					path='*'
					element={<h1>Not found</h1>}
				/>
			</Routes>
		</>
	);
};
