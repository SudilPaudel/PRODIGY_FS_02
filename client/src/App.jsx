import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EmployeeDetails from './pages/EmployeeDetails';
import Navbar from './components/NavBar';
import CreateEmployee from './pages/CreateEmployee';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/create-employee" element={<ProtectedRoute><CreateEmployee /></ProtectedRoute>} />
        <Route path="/employee/:id" element={<ProtectedRoute><EmployeeDetails /></ProtectedRoute>} />
      </Routes>
      
      </main>
    </div>
  );
}

export default App;
