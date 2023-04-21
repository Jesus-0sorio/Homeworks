import { useContext } from 'react';
import UserContext from '../context/UserContext';

export const Profile = () => {
  const { user } = useContext(UserContext);
  return <div>
    <h1>Profile</h1>
    <p>Nombre: {user.name}</p>
    <p>Correo: {user.email}</p>
  </div>;
};
