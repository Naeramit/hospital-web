import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RedirectIfAuthenticated({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isAdmin = useSelector(state => state.auth.user?.role == 1)
  const isNewUser =  useSelector(state => state.auth.user?.status == 1)


  if (isAuthenticated ) {
    if (isAdmin) return <Navigate to="/admin" />;
    if (isNewUser) return <Navigate to="/newUser"/>
    return <Navigate to="/doctor" />
  }
  return children;
}