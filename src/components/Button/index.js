const Button = ({ text, onClick, type, className}) => {
	return <button className={`font-bold py-3 px-4 rounded-full text-xl tracking-wider ${ type === 'primary' ? 'bg-orange text-white' : 'bg-light-gray text-secondary'} ${className}`}  onClick={onClick}>{text}</button>
}

export default Button;