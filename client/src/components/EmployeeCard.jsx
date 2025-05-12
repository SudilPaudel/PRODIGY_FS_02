
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EmployeeCard({ employee }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700"
      onClick={() => navigate(`/employee/${employee._id}`)}
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-300">
              {employee.name.charAt(0)}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{employee.name}</h2>
        </div>
        
        <div className="space-y-2 mt-4">
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {employee.email}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {employee.position}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {employee.department}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ${employee.salary}
          </p>
        </div>
      </div>
    </div>
);
}

export default EmployeeCard;
