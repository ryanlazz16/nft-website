import express from 'express';
import dotenv from 'dotenv';
import info from './data/info.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/info', (req, res) => {
	res.json(info);
});

app.get('/api/charities', (req, res) => {
	res.json(info.charities);
});

app.get('/api/nfts', (req, res) => {
	res.json(info.nfts);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
