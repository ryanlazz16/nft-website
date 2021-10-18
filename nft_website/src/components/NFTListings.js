import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from './Listing';

const NFTListings = ({ ethPolygonImage }) => {
	const [nfts, setNfts] = useState([]);

	useEffect(() => {
		const fetchNfts = async () => {
			const { data } = await axios.get('/api/nfts');

			setNfts(data);
		};

		fetchNfts();
	}, []);

	return (
		<Container id='nfts' className='py-5'>
			<Row className='justify-content-center'>
				<Col xs={10} sm={12}>
					<h3>NFTs</h3>
				</Col>
			</Row>
			<Row className='justify-content-center'>
				{nfts.map((nft) => (
					<Col key={nft._id} xs={10} sm={6} md={6} lg={6} xl={3}>
						<Listing
							nft={nft}
							ethPolygonImage={ethPolygonImage}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default NFTListings;
