import Button from "../Button";

const HeaderContainer = () => {
	return <div>
		<h1 className="font-sans font-bold text-f-36 ml-12">Your <br/>Fitness Tracker</h1>
		<div className="ml-5 mt-8 flex flex-row gap-4">
			<Button type={'primary'} text={"Connected Devices"}/>
			<Button text={"Statistics"}/>
		</div>
	</div>
}

export default HeaderContainer;