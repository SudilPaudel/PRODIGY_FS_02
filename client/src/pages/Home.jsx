import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        // Check if admin token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }

        // Listen for system dark mode changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className={`min-h-screen flex items-center justify-center p-6 
            ${isDarkMode 
                ? 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900' 
                : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'}`}>
            <div className="max-w-4xl text-center space-y-8 relative">
                {/* Decorative elements */}
                <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full blur-3xl
                    ${isDarkMode ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}></div>
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl
                    ${isDarkMode ? 'bg-cyan-500/20' : 'bg-pink-500/20'}`}></div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn tracking-tight">
                    Employee Management
                    <span className={`block text-transparent bg-clip-text 
                        ${isDarkMode 
                            ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                            : 'bg-gradient-to-r from-purple-400 to-pink-400'}`}>
                        System
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeIn delay-100 max-w-2xl mx-auto leading-relaxed">
                    Transform your workforce management with our powerful and intuitive platform
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn delay-200">
                    {isLoggedIn ? (
                        <Link to="/dashboard" 
                            className={`w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold hover:opacity-90 transform transition-all hover:-translate-y-1 hover:shadow-xl
                                ${isDarkMode 
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                            Go to Dashboard
                        </Link>
                    ) : (
                        <Link to="/login" 
                            className={`w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold hover:opacity-90 transform transition-all hover:-translate-y-1 hover:shadow-xl
                                ${isDarkMode 
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                            Get Started
                        </Link>
                    )}
                    
                    <button className={`w-full sm:w-auto px-8 py-4 text-white rounded-xl backdrop-blur-sm transition-all
                        ${isDarkMode 
                            ? 'border-2 border-blue-400/30 hover:bg-blue-900/50'
                            : 'border-2 border-purple-400/30 hover:bg-white/10'}`}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Home;