import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = ({ info }) => {
	return (
		<>
			<header>
				<Navbar
					bg='light'
					variant='light'
					expand='lg'
					collapseOnSelect
					// fixed='top'
				>
					<Container>
						<Navbar.Brand>
							<img
								src={info.logoImage}
								alt='Logo'
								className='navLogo'
							/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='ml-auto'>
								<li className='nav-item'>
									<Link
										to='mission'
										activeClass='active'
										className='nav-link link'
										spy={true}
										smooth={true}
										duration={500}
										offset={-50}
									>
										Mission
									</Link>
								</li>
								<li className='nfts'>
									<Link
										to='nfts'
										activeClass='active'
										className='nav-link link'
										spy={true}
										smooth={true}
										duration={500}
										offset={-50}
									>
										NFT's
									</Link>
								</li>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Header;
