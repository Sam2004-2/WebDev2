const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import the auth routes

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT || 3001;

// Establish connection to the MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));
  


app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
