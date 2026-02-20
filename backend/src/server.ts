import { config } from './config/config.js';
import express, { json } from 'express';
import userRoutes from './routes/users.route.js';

export const app = express();
app.use(json());
app.use("/api",userRoutes);


app.listen(config.port, () => {
    try {
        console.log(`Server is running on port ${config.port}`);
        console.log( `                                                             
 _____ _____ _____ _____ _____ _____ _____ _____ _____ _____ 
|     |   __|   | |   __|  _  |   __|   __|     | __  |     |
| | | |   __| | | |__   |     |  |  |   __|-   -|    -|  |  |
|_|_|_|_____|_|___|_____|__|__|_____|_____|_____|__|__|_____|
                                                             `)
    } catch (error) {
        console.error('Error starting server:', error);
    }
});
