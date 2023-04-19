import { Route, Routes, Navigate } from 'react-router-dom';
import { NavComponent } from './components/NavComponent';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login'

function App() {
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
					path='/*'
					element={<Navigate to='/about' />}
				/>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
			</Routes>
		</>
	);
}

export default App;
