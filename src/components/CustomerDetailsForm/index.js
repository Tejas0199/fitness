import SelectBox from "../SelectBox";

const CustomerDetailsForm = () => {
	return <div className="form-container bg-orange p-4 mt-3">
		<h1 className="text-white font-semibold text-f-20 mb-3">ADD Detailes</h1>
		<input className="w-100 py-3 px-4 rounded-full" placeholder="Name"/>
		<div className="flex flex-row gap-3 my-3">
			<input className="w-9/12 py-3 px-4 rounded-full" placeholder="Age"/>
			<input className="w-100 py-3 px-4 rounded-full" placeholder="Height"/>
		</div>
		<SelectBox label="Are you a gym member?" options={['Yes', 'No']}/>
		<SelectBox label="Do you eat meet?" options={['Yes', 'No']}/>
		<SelectBox label="Are you a cyclist?" options={['Yes', 'No']}/>
	</div>
}

export default CustomerDetailsForm;