import { Row, Col, Container } from 'react-bootstrap';

const Mission = ({ charities }) => {
	return (
		<Container id='mission' className='my-5 py-5'>
			<Row className='justify-content-center align-items-center'>
				<Col className='px-4' xs={10} sm={12} md={12} lg={8} xl={8}>
					<h3>Mission</h3>
					<p>
						Digital Dialects is a limited collection of
						algorithmically generated art pieces with each art
						piece featuring a single word and its translation
						in 15 languages. The 15 languages in order of
						appearance are: English, Chinese (simplified),
						Spanish, Hindi, Arabic, Portuguese, Russian,
						Japanese, Javanese, German, Korean, French,
						Telugu, Italian, and Tagalog. 50% of all profits
						will help support some amazing charities including
						but not limited to Red Cross, Doctors Without
						Borders, Miles4Migrants, and Make-A-Wish.
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
								className='p-1'
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
