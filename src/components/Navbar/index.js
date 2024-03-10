import leftArrow from '../../assets/images/left_arrow.svg';
import Avatar from '../../assets/images/avatar.png';
const Navbar = () => {
	return <div className="flex justify-between p-4">
		<div className='bg-mid-gray p-4 rounded-full'>
			<img src={leftArrow} />
		</div>
		<div className='w-16'>
			<img src={Avatar} />
		</div>
	</div>
}

export default Navbar;