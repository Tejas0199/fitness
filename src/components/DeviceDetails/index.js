import Button from "../Button";

import WatchImage from '../../assets/images/fire-boltt.svg';

const DeviceInfo = () => {
	return <div className=" device-container p-3 mt-20 mx-1 bg-dark-gray relative">
		<div className="w-1/2 p-2 h-100 flex flex-col justify-between">
			<div className="grow-1">
				<p className="text-orange font-semibold text-13">Smart watch</p>
				<p className="text-white font-bold text-26">Fire Boltt</p>
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-secondary text-xs">Scan the Device <br/> QR to connect</p>
				<Button className="w-9/12" type={'primary'} text="Scan"/>
			</div>
		</div>
		<img className="device-image absolute right-0" src={WatchImage}/>
	</div>
}

export default DeviceInfo;