import { Row, Col, Container } from 'react-bootstrap';
import Listing from './Listing';

const NFTListings = ({ nfts, ethPolygonImage }) => {
	return (
		<Container id='nfts' className='py-3'>
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
