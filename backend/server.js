import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import info from './data/info.js';

dotenv.config();

const app = express();

app.get('/api/info', (req, res) => {
	res.json(info);
});

app.get('/api/charities', (req, res) => {
	res.json(info.charities);
});

app.get('/api/nfts', (req, res) => {
	res.json(info.nfts);
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/nft_website/build')));

	app.get('*', (req, res) => {
		res.sendFile(
			path.resolve(__dirname, 'nft_website', 'build', 'index.html')
		);
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
