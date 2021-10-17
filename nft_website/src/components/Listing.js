import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Listing = ({ nft, ethPolygonImage }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={nft.link}>
				<Card.Img src={nft.image} variant='top'></Card.Img>
			</a>

			<Card.Body className='px-1 pb-0'>
				<Card.Title as='p'>
					<strong>{nft.name}</strong>
				</Card.Title>

				<Card.Text as='div' className='d-flex justify-content-end'>
					<p className='pr-1 mb-0'>{nft.price}</p>
					<OverlayTrigger
						key='top'
						placement='top'
						overlay={
							<Tooltip id='tooltip-top'>
								<strong>Eth on Polygon</strong>
							</Tooltip>
						}
					>
						<img
							className='ethPolygonImage'
							src={ethPolygonImage}
							alt='Eth on Polygon'
						/>
					</OverlayTrigger>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Listing;
