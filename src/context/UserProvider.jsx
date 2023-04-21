import { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [logged, setlogged] = useState(false);

	return (
		<UserContext.Provider value={{ user, setUser, logged, setlogged }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
