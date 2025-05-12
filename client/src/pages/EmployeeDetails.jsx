import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await API.get(`/employees/${id}`);
        setEmployee(res.data);
      } catch (err) {
        alert('Failed to load employee');
      }
    };
    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    if (confirm('Are you sure?')) {
      await API.delete(`/employees/${id}`);
      navigate('/dashboard');
    }
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await API.put(`/employees/${id}`, employee);
    alert('Updated');
  };

  if (!employee) return <p className="p-6">Loading...</p>;

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 animate-gradient-x">
        <div className="max-w-2xl mx-auto p-8 bg-white/90 dark:bg-gray-800/30 backdrop-blur-sm shadow-md rounded-3xl transform transition-all duration-500 hover:shadow-2xl animate-fadeIn border border-gray-100">
            <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 text-transparent bg-clip-text border-b-2 border-indigo-500/20 pb-4 transform transition-all duration-300 hover:scale-105">
               Update {employee.name}'s Profile
            </h1>
            <div className="flex flex-col items-center gap-8">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-5xl font-bold text-white relative transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                        {employee.name ? employee.name[0].toUpperCase() : '?'}
                    </div>
                </div>

                <div className="w-full space-y-6">
                    {['name', 'email', 'department', 'position', 'salary'].map((field) => (
                        <div key={field} className="transform transition-all duration-300 hover:scale-102 animate-slideUp">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                name={field}
                                value={employee[field] || ''}
                                onChange={handleChange}
                                className="block w-full p-4 mt-2 border border-gray-200 rounded-2xl 
                                         bg-white/80 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 backdrop-blur-sm transition-all duration-300
                                         focus:ring-4 focus:ring-violet-500/30 focus:border-violet-500
                                         hover:border-violet-400 hover:shadow-lg placeholder-gray-400"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-6 mt-12 justify-center">
                <button
                    onClick={handleUpdate}
                    className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold
                             transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20
                             focus:outline-none focus:ring-4 focus:ring-violet-500/50 animate-pulse-slow"
                >
                    <span className="relative z-10">Update Profile</span>
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                    onClick={handleDelete}
                    className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold
                             transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20
                             focus:outline-none focus:ring-4 focus:ring-red-500/50"
                >
                    <span className="relative z-10">Delete Employee</span>
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-r from-rose-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
        </div>
    </div>
);
}

export default EmployeeDetails;
