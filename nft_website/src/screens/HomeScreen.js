import { Row, Col, Container } from 'react-bootstrap';
import Listing from '../components/Listing';

const HomeScreen = ({ info }) => {
	return (
		<>
			<img
				src={info.bannerImage}
				alt='Banner'
				className='banner p-5'
				id='banner'
			/>
			<img
				src={info.bannerImageSmall}
				alt='Banner'
				className='banner py-5'
				id='banner-small'
			/>
			<Container id='mission' className='my-5 py-5'>
				<Row className='justify-content-center align-items-center'>
					<Col
						className='px-4'
						xs={12}
						sm={12}
						md={12}
						lg={8}
						xl={8}
					>
						<h3>Mission</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Aut animi sit fuga quasi
							quisquam exercitationem aliquam, ratione
							minus, eligendi nulla autem placeat, dolore
							recusandae
						</p>
					</Col>
					<Col
						className='px-4 mt-3'
						xs={10}
						sm={12}
						md={12}
						lg={4}
						xl={4}
					>
						<Row>
							{info.charities.map((charity) => (
								<Col
									className='p-0'
									key={charity._id}
									xs={6}
									sm={3}
									md={3}
									lg={6}
									xl={6}
								>
									<a href={charity.website}>
										<img
											src={charity.image}
											alt={charity.name}
											className='charity-image'
										/>
									</a>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
			<Container id='nfts' className='py-3'>
				<Row className='justify-content-center'>
					<Col xs={10} sm={12}>
						<h3>NFTs</h3>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					{info.nfts.map((nft) => (
						<Col
							key={nft._id}
							xs={10}
							sm={6}
							md={6}
							lg={6}
							xl={3}
						>
							<Listing
								nft={nft}
								ethPolygonImage={info.ethPolygonImage}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default HomeScreen;
