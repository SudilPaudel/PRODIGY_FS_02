import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../api';

function Register() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const { login } = useAuth();
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await API.post('/auth/register', { email, password });
  //     login(res.data.token);
  //     navigate('/dashboard');
  //   } catch (err) {
  //     alert('Registration failed');
  //   }
  // };

  // return (
  //   <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow mt-10 rounded">
  //     <h2 className="text-2xl mb-4 font-semibold">Admin Register</h2>
  //     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full mb-4 p-2 border rounded" />
  //     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full mb-4 p-2 border rounded" />
  //     <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
  //   </form>
  // );
}

export default Register;
