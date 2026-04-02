import {useState} from 'react';
import { GoChevronDown } from 'react-icons/go';
// TODO: Run this now and see how it looks ensure it doesn't look to awkward
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
    const optionsToRender = options.map((x,idx) => {
        return <div class="hover:bg-sky-100 rounded cursor-pointer p-1" key={idx} id={x.value} onClick={() => handleOptionClick(x)}>
            {x.label}
        </div>
    });
    return <div style={{border: '2px dashed darkseagreen'}} className='w-48 relative'>
        <div onClick={handleClick} className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full'>{ select?.label || 'Select...'} <GoChevronDown className='text-lg'> </GoChevronDown></div>
        {/* If isOpen is true the div is rendered, if not nothing is displayed */}
        {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{optionsToRender}</div>}
    </div>
}

export default Dropdown