import { useState } from "react";
import downArrow from '../../assets/images/down-arrow.svg';
const SelectBox = ({ label, onChange, options}) => {
	const [value, setValue] = useState('');
	const [focus, setFocus] = useState(false);
	const onSelectHandler = (value,event) => {
		event.stopPropagation();
		setValue(value);
		setFocus(false);
	}
	return <div className="select-box py-3 px-4 my-3 bg-white relative rounded-full flex flex-row justify-between" onClick={() => setFocus(!focus)}>
		<p className="font-bold text-sm">{value || label}</p> 
		{ value ? null : <img src={downArrow} />}
		{ focus && <div className="options absolute bg-white w-100">
			{
			options?.map((option,index) => {
				return <p className="py-3 px-4" key={index} onClick={onSelectHandler.bind(this,option)}>{option}</p>
			})
		}
		</div>}
	</div>
}

export default SelectBox;