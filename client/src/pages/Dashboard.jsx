import { useEffect, useState } from 'react';
import API from '../api';
import EmployeeCard from '../components/EmployeeCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    role: '',
    salaryMin: '',
    salaryMax: ''
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await API.get('/employees');
        setEmployees(res.data.data);
      } catch (err) {
        alert('Failed to fetch employees');
      }
    };
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by department, role, and salary range


    const matchesDepartment = !filters.department || emp.department === filters.department;
    const matchesRole = !filters.role || emp.position === filters.role;
    const matchesSalary =
      (!filters.salaryMin || emp.salary >= parseInt(filters.salaryMin)) &&
      (!filters.salaryMax || emp.salary <= parseInt(filters.salaryMax));

    return matchesSearch && matchesDepartment && matchesRole && matchesSalary;
  });

return (
    <div className="p-6 pt-20 min-h-screen bg-[#fdf6ec] dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white transition-all duration-500">
        <div className="max-w-7xl mx-auto">
            {/* Keep existing header section */}
            <div className="flex justify-between items-center mb-12 animate-fadeIn">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
                    Employees Dashboard
                </h1>
                <Link
                    to="/create-employee"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 active:scale-95 flex items-center gap-3 hover:rotate-1"
                >
                    <svg className="w-5 h-5 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Employee
                </Link>
            </div>

            <div className="flex gap-8">
                {/* Filters Sidebar */}
                <div className="w-72 bg-white/90 dark:bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-blue-500/5 animate-slideIn border border-gray-200 dark:border-gray-800 hover:shadow-blue-500/10 transition-all duration-300">
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-6">Filters</h2>
                    <div className="space-y-6">
                        {/* Department Filter */}
                        <div className="filter-group transform transition-all duration-300 hover:scale-102">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">Department</label>
                            <select
                                value={filters.department}
                                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                                className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                            >
                                <option value="">All Departments</option>
                                {[...new Set(employees.map(emp => emp.department))].map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>

                        {/* Position Filter */}
                        <div className="filter-group transform transition-all duration-300 hover:scale-102">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">Position</label>
                            <select
                                value={filters.role}
                                onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                                className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                            >
                                <option value="">All Positions</option>
                                {[...new Set(employees.map(emp => emp.position))].map(position => (
                                    <option key={position} value={position}>{position}</option>
                                ))}
                            </select>
                        </div>

                        {/* Salary Range Filters */}
                        <div className="filter-group transform transition-all duration-300 hover:scale-102">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">Salary Range</label>
                            <div className="space-y-3">
                                <input
                                    type="number"
                                    placeholder="Min Salary"
                                    value={filters.salaryMin}
                                    onChange={(e) => setFilters({ ...filters, salaryMin: e.target.value })}
                                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Salary"
                                    value={filters.salaryMax}
                                    onChange={(e) => setFilters({ ...filters, salaryMax: e.target.value })}
                                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setFilters({
                                department: '',
                                role: '',
                                salaryMin: '',
                                salaryMax: ''
                            })}
                            className="w-full p-3 mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:border-blue-400"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                {/* Keep existing main content section */}
                <div className="flex-1 animate-fadeIn">
                    <div className="mb-8 relative transform transition-all duration-300 hover:scale-102">
                        <input
                            type="text"
                            placeholder="Search employees..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-8 py-4 rounded-2xl bg-white/90 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 pl-14 backdrop-blur-xl shadow-lg hover:shadow-blue-500/20 hover:border-blue-400"
                        />
                        <svg className="w-6 h-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEmployees.map((emp, index) => (
                            <div
                                key={emp._id}
                                className="transform transition-all duration-500 hover:scale-105 hover:rotate-1 animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="group relative overflow-hidden rounded-3xl bg-white/90 dark:bg-gray-900/70 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-200 dark:border-gray-800">
                                    <EmployeeCard employee={emp} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .animate-fadeInUp {
                animation: fadeInUp 0.6s ease-out both;
            }
            .group:hover {
                transform: translateY(-5px);
            }
        `}</style>
    </div>
);
}

export default Dashboard;
