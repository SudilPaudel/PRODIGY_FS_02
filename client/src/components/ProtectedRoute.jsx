// components/ProtectedRoute.jsx
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      alert('Please login first');
    }
  }, [token]);

  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
