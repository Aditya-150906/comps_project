require('dotenv').config();
const mongoose = require('mongoose');
const Cycle = require('./models/Cycle');

const cycles = [
  {
    name: 'Ion Trail X',
    type: 'Electric Mountain',
    price: 25,
    range: '40 miles',
    speed: '20 mph',
    img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'City Glide C2',
    type: 'Urban Commuter',
    price: 15,
    range: 'N/A',
    speed: 'N/A',
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Aero Sprint',
    type: 'Road Bike',
    price: 18,
    range: 'N/A',
    speed: 'N/A',
    img: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800'
  }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cycle-rental')
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    await Cycle.deleteMany({});
    await Cycle.insertMany(cycles);
    console.log('Data seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
