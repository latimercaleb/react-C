import classnames from 'classnames';
function Accordion({
    displayData,
	...otherProps
}) {
    // Method 3: Reference map directly, just giving a variable name to the map operation return value and calling in the template, can only be called by refference
    const displayAccordionItems3 = displayData.map((itm, idx) => {
        return (
            <div key={idx}>
                <p>{itm.label}</p>
                <p>{itm.content}</p>
            </div>
        )
    })

    // Method 2: Arrow function: Still needs to be executed in return render but can omit one return from function call with arrow notation
    const displayAccordionItems2 = () => (displayData.map((itm, idx) => {
            return (
                <div key={idx}>
                    <p>{itm.label}</p>
                    <p>{itm.content}</p>
                </div>
            )
        }))

    // Method 1: Call it as a function, make sure function returns jsx, execute function in return
    function displayAccordionItems () {
        return displayData.map((itm, idx) => {
            return (
                <div key={idx}>
                    <p>{itm.label}</p>
                    <p>{itm.content}</p>
                </div>
            )
        })
    }
	return <div>Hello from accordion {displayAccordionItems()} {displayAccordionItems2()} {displayAccordionItems3}</div>;
}

export default Accordion;
