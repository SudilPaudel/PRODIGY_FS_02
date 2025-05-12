import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(admin._id);
    res.status(201).json({
      data: admin,
      token: token
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    // Save the admin to the database
    await admin.save();

    // Generate token for the new admin
    const token = generateToken(admin._id);

    // Send the response with the token
    res.status(201).json({
       data: {
        admin: admin,
        token: token
       }
      });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: 'Server error' });
  }
};