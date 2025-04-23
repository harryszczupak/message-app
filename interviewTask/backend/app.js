import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import sequelize from './utils/database.js';
import cors from 'cors'; // Import CORS
import mainRouter from './routes/mainRoute.js';
import Message from './models/Messages.js';
// Initialize environment variables

config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Interview task' });
});
app.use(
	cors({
		origin: 'http://localhost:3000', // Dopuszczamy dostęp z tego źródła
		methods: ['GET', 'POST'], // Zezwalamy na metody GET i POST
		allowedHeaders: ['Content-Type'], // Zezwalamy na nagłówek Content-Type
	})
);

app.use('/api', mainRouter);
// Global Error Handling Middleware
app.use((error, req, res, next) => {
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;

	res.status(status).json({ success: false, message: message, data: data });
});

// DB Connection
sequelize
	.sync()
	.then((result) => {
		console.log('Connection has been established successfully.');
		console.log(result);
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});
