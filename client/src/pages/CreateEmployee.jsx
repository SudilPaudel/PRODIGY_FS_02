// pages/CreateEmployee.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function CreateEmployee() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    position: '',
    salary: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/employees', formData);
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to create employee');
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 pt-24 pb-12 animate-fadeIn">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto p-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transform hover:scale-[1.02] transition-all duration-500"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent animate-pulse">
          Create New Employee
        </h2>
        
        <div className="space-y-6">
          {['name', 'email', 'department', 'position', 'salary'].map((field, index) => (
            <div 
              key={field}
              className="transform hover:-translate-y-1 transition-all duration-300 animate-slideIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 capitalize">
                {field}
              </label>
              <input
                name={field}
                type={field === 'salary' ? 'number' : 'text'}
                placeholder={`Enter ${field.toLowerCase()}`}
                value={formData[field]}
                onChange={handleChange}
                required
                className="block w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300 outline-none hover:border-green-400 bg-white/60 dark:bg-gray-700/60 dark:text-white backdrop-blur-sm"
              />
            </div>
          ))}
        </div>

        <button 
          type="submit" 
          className="w-full mt-8 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-4 rounded-lg font-semibold transform hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          <span className="flex items-center justify-center group">
            Create Employee
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </form>
    </div>
);
}

export default CreateEmployee;
