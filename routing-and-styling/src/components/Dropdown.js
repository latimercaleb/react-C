import {useState} from 'react';
function Dropdown({options, select, onSelect}){
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prevOpen => !prevOpen)
    };
    const handleOptionClick = (e) => {
        setIsOpen(false);
        console.log(e)
        onSelect(e)
    };
    const optionsToRender = options.map(x => {
        return <div id={x.value} onClick={() => handleOptionClick(x)}>
            {x.label}
        </div>
    });
    return <div>
        <div onClick={handleClick}>{ select?.label || 'Select...'}</div>
        {/* If isOpen is true the div is rendered, if not nothing is displayed */}
        {isOpen && <div>{optionsToRender}</div>}
    </div>
}

export default Dropdown