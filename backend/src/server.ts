import { config } from './config/config.js';
import express, { json } from 'express';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

export const app = express();

app.use(cors({origin: config.CORS_ORIGIN}));
app.use(json());



app.use("/api/auth", authRoutes);
//add more routes...








app.listen(config.port, () => {
    try {
        console.log(`Server is running on port ${config.port}`);
        console.log(` _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ 
|     |   __|   | |   __|  _  |   __|   __|     | __  |     |
| | | |   __| | | |__   |     |  |  |   __|-   -|    -|  |  |
|_|_|_|_____|_|___|_____|__|__|_____|_____|_____|__|__|_____|`)
    } catch (error) {
        console.error('Error starting server:', error);
    }
});
