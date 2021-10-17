import { Row, Col, Container } from 'react-bootstrap';

const Mission = ({ charities }) => {
	return (
		<Container id='mission' className='my-5 py-5'>
			<Row className='justify-content-center align-items-center'>
				<Col className='px-4' xs={10} sm={12} md={12} lg={8} xl={8}>
					<h3>Mission</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Aut animi sit fuga quasi quisquam
						exercitationem aliquam, ratione minus, eligendi
						nulla autem placeat, dolore recusanda
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
						{charities.map((charity) => (
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
	);
};

export default Mission;
