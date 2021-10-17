import Mission from '../components/Mission';
import NFTListings from '../components/NFTListings';

const HomeScreen = ({ info }) => {
	return (
		<>
			<div className='banner-wrapper'>
				<a href={info.openseaLink}>
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
				</a>
			</div>
			<Mission charities={info.charities}></Mission>
			<NFTListings
				nfts={info.nfts}
				ethPolygonImage={info.ethPolygonImage}
			></NFTListings>
		</>
	);
};

export default HomeScreen;
