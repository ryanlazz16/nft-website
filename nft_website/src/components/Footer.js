import { Container } from 'react-bootstrap';

const Footer = ({ info }) => {
	return (
		<footer id='footer' className='py-2'>
			<Container>
				<div
					className='d-flex justify-content-center align-items-center'
					align='center'
				>
					<div className='p-3'>Copyright &copy; Digital Dialects</div>
					<a href={info.openseaLink}>
						<button
							type='button'
							className='btn btn-outline-secondary footer-button m-2 d-flex align-items-center'
						>
							<img
								id='opensea-footer'
								src={info.openseaImage}
								alt='OpenSea'
							/>
							<p className='m-0 pl-2'>OpenSea</p>
						</button>
					</a>
					<a href={info.twitterLink}>
						<button
							type='button'
							className='btn btn-outline-secondary footer-button m-2 d-flex align-items-center'
						>
							<i
								id='twitter-footer'
								className='fab fa-twitter'
							></i>
							<p className='m-0 pl-2'>Twitter</p>
						</button>
					</a>
					<a href={info.instagramLink}>
						<button
							type='button'
							className='btn btn-outline-secondary footer-button m-2 d-flex align-items-center'
						>
							<i
								id='instagram-footer'
								className='fab fa-instagram'
							></i>
							<p className='m-0 pl-2'>Instagram</p>
						</button>
					</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
