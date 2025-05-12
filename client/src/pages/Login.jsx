import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import API from '../api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, token } = useAuth();
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/login', { email, password });
            login(res.data.token);
            navigate('/');
        } catch (err) {
            alert('Login failed');
        }
    };
    useEffect(() => {
        if (token) {
            alert('Already Logged In');
            navigate('/');
        }
    }, []);

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-xy">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <form onSubmit={handleSubmit} className="relative w-96 p-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fadeIn">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <i className="fas fa-user text-3xl text-white"></i>
                </div>
            </div>
            <h2 className="text-3xl mt-8 mb-8 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center animate-slideDown">
                Welcome Back
            </h2>
            <div className="space-y-6">
                <div className="group animate-slideRight">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="block w-full p-4 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 group-hover:translate-x-2"
                    />
                </div>
                <div className="group animate-slideLeft">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="block w-full p-4 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 group-hover:translate-x-2"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white p-4 rounded-xl transform transition-all duration-300 hover:scale-105 focus:outline-none hover:shadow-xl active:scale-95 animate-pulse"
                >
                    <span className="inline-flex items-center justify-center gap-2">
                        Login
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounceX" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    </div>
);
}

export default Login;