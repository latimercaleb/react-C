function Button({ primary, secondary, success, warning, danger, outline, rounded, children }) {
	return <button className='px-3 py-1.5 border border-blue-450 bg-blue-800 text-white'>{children}</button>;
}

export default Button;
