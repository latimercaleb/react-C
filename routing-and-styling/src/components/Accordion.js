import classnames from 'classnames';
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
function Accordion({ displayData, ...otherProps }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);
	// Method 3: Reference map directly, just giving a variable name to the map operation return value and calling in the template, can only be called by refference
	const displayAccordionItems3 = displayData.map((itm, idx) => {
		let icon = '';
		if (idx == expandedIndex) {
			console.log('expanded');
			icon = (
				<span>
					<GoChevronDown />
				</span>
			);
		} else {
			console.log('collapsed');
			icon = (
				<span>
					<GoChevronLeft />
				</span>
			);
		}
		return (
			<div
				key={idx}
				className="flex p-3 bg-gray border-b items-center cursor-pointer justify-between">
				<p
					onClick={() =>
						expandedIndex == idx ? setExpandedIndex(-1) : setExpandedIndex(idx)
					}>
					{itm.label}
					{icon}
				</p>
				<span className="border-b p-5">
					{idx == expandedIndex ? <p>{itm.content}</p> : null}
				</span>
				{/* <p>{itm.content}</p> */}
			</div>
		);
	});



	// Method 2: Arrow function: Still needs to be executed in return render but can omit one return from function call with arrow notation
	const displayAccordionItems2 = () =>
		displayData.map((itm, idx) => {
			return (
				<div key={idx}>
					<p>{itm.label}</p>
					<p>{itm.content}</p>
				</div>
			);
		});

	// Method 1: Call it as a function, make sure function returns jsx, execute function in return
	function displayAccordionItems() {
		return displayData.map((itm, idx) => {
			return (
				<div key={idx}>
					<p>{itm.label}</p>
					<p>{itm.content}</p>
				</div>
			);
		});
	}
	return (
		<div className="border-x boprder-t rounded">
			Hello from accordion {displayAccordionItems3}
		</div>
	);
}

export default Accordion;
