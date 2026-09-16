const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/User');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB Connected');

    const adminEmail = 'admin@suryacabs.com';
    const adminExists = await User.findOne({ email: adminEmail });

    if (adminExists) {
      console.log('Admin user already exists!');
      process.exit();
    }

    const adminUser = new User({
      name: 'Admin',
      email: adminEmail,
      password: 'AdminPassword123!',
      role: 'admin',
    });

    await adminUser.save();
    console.log('Admin user seeded successfully!');
    console.log('Email: admin@suryacabs.com');
    console.log('Password: AdminPassword123!');
    
    process.exit();
  } catch (error) {
    console.error('Error seeding admin user:', error);
    process.exit(1);
  }
};

seedAdmin();
