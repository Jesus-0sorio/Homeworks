import { Navigate, Route, Routes } from 'react-router-dom';
import { NavComponent } from './components/NavComponent';
import UserProvider from './context/UserProvider';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import { ProductsPage } from './components/ProductsPage';
import {AppRoutes} from './components/AppRoutes'

function App() {
	return (
		<UserProvider>
			
			<AppRoutes />
			{/* <Routes>
				<Route path='products'>
					<Route
						path=':id'
						element={<ProductsPage />}
					/>
				</Route>
				<Route
					path='login'
					element={<Login />}
				/>
			</Routes> */}
		</UserProvider>
	);
}

export default App;
