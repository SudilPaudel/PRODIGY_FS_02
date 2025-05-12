import Employee from '../models/Employee.js';

// Create
export const createEmployee = async (req, res) => {
  try {
    const { name, position, department, email, salary } = req.body;
    // Check if the employee already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Employee already exists' });
    }
    // Create new employee
    const newEmployee = new Employee({
      name,
      position,
      department,
      email,
      salary,
    });
    await newEmployee.save();
    
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Read All
export const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json({
    data: employees,
    count: employees.length,
  });
};

// Read One
export const getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.json(emp);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update
export const updateEmployee = async (req, res) => {
  try {
    const { name, position, department, email, salary } = req.body;
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(400).json({ message: 'Update failed' });
  }
};

// Delete
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch {
    res.status(500).json({ message: 'Delete failed' });
  }
};
