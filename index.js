import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import personRoutes from './routes/personRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check the database connection status
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

app.use(bodyParser.json());

app.use('/api', personRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
