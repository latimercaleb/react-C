import classnames from 'classnames';
function Button({ primary, secondary, success, warning, danger, outlined, rounded, children, ...otherProps}) {
    const cssClasses = classnames('flex items-center px-3 py-1.5 border text-white', {
        'border-blue-450 bg-blue-800 ': primary,
        'border-gray-900 bg-gray-900 ': secondary,
        'border-green-500 bg-green-500 ': success,
        'border-yellow-450 bg-yellow-800 ': warning,
        'border-red-450 bg-red-800': danger,
        'bg-white text-black': outlined,
        'rounded-full': rounded
    })
    console.log(otherProps)
	return <button className={cssClasses} {...otherProps}>{children}</button>;
}

export default Button;
