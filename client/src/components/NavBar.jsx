import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 border-b
        ${window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border-gray-800/50 backdrop-blur-md bg-opacity-80'
          : 'bg-gradient-to-r from-slate-50 to-white border-gray-200/50 backdrop-blur-md bg-opacity-90'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <Link 
                    to="/" 
                    className={`text-2xl font-bold transition-all duration-500 
                        transform hover:scale-110 flex items-center space-x-2 relative hover:rotate-[2deg]
                        ${window.matchMedia('(prefers-color-scheme: dark)').matches 
                          ? 'text-white hover:text-blue-400'
                          : 'text-slate-700 hover:text-blue-500'}`}
                >
                    <span className="bg-gradient-to-r from-blue-500 to-blue-400 p-2 rounded-lg 
                                   shadow-lg shadow-blue-500/30 animate-pulse">EMS</span>
                </Link>
                
                <div className="flex gap-8">
                    {token ? (
                        <>
                            <Link 
                                to="/dashboard" 
                                className={`transition-all duration-300 relative group flex items-center 
                                    space-x-1 px-3 py-2 overflow-hidden rounded-lg
                                    ${window.matchMedia('(prefers-color-scheme: dark)').matches 
                                      ? 'text-gray-300 hover:text-blue-400'
                                      : 'text-slate-600 hover:text-blue-500'}`}
                            >
                                <span className="z-10 relative">Dashboard</span>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 
                                              transform scale-x-0 group-hover:scale-x-100 
                                              transition-transform duration-300"></div>
                            </Link>
                            <button 
                                onClick={handleLogout} 
                                className={`transition-all duration-300 px-5 py-2 rounded-lg transform 
                                    hover:scale-105 relative overflow-hidden
                                    ${window.matchMedia('(prefers-color-scheme: dark)').matches 
                                      ? 'text-gray-300 hover:text-red-400 border-gray-800 hover:border-red-400/50 hover:bg-red-500/10'
                                      : 'text-slate-600 hover:text-red-500 border-slate-200 hover:border-red-500/50 hover:bg-red-500/5'}`}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link 
                                to="/login" 
                                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400 
                                         text-white px-6 py-2 rounded-lg font-medium
                                         transition-all duration-300 transform hover:scale-105 
                                         hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]
                                         border border-blue-400/20 group"
                            >
                                <span className="relative z-10">Login</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 
                                              transform scale-x-0 group-hover:scale-x-100 
                                              transition-transform duration-500 origin-left"></div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    </nav>
);
}

export default Navbar;