const ProgressCircle = () => {
	return (
		<svg className="circle-bar p-4">
			<circle
				className="progress-bar-bg"
				cx="160"
				cy="-10"
				r="58"
				fill="transparent"
				stroke="#424242"
				stroke-width={'15px'}
			/>
			<circle
				className="progress-bar-per"
				cx="160"
				cy="-10"
				r="58"
				fill="transparent"
				stroke="#FF6020"
				stroke-width={'15px'}
			/>
			<text 
			fill="white"
			x="65"
			y="62"
			fontSize={26}
			className="font-bold"
			textAnchor="middle"
			alignmentBaseline="middle"
			>5,233</text>
			<text 
			fill="#FF6020"
			x="65"
			y="88"
			fontSize={12}
			className="font-bold"
			textAnchor="middle"
			alignmentBaseline="middle"
			>steps</text>
		</svg>
	);
};

const ActivityDetails = () => {
	return (
		<div className="flex flex-row gap-3 p-2 mt-5">
			<div className="circle w-50 bg-dark-gray flex flex-row text-center justify-center align-items-center">
				<div>
					<ProgressCircle/>
				</div>
			</div>
			<div className="w-50 flex flex-col gap-3">
				<div className="p-3 bg-light-back rounded-full text-center">
					<p className="text-orange text-sm font-bold">Calories</p>
					<p className="text-f-20 font-bold">1200 Kcal</p>
				</div>
				<div className="p-3 bg-light-back rounded-full text-center">
					<p className="text-orange text-sm font-bold">Water</p>
					<p className="text-f-20 font-bold">1.8 ltrs</p>
				</div>
			</div>
		</div>
	);
};

export default ActivityDetails;
