/* react */
import React from 'react';

/* links */
import APIs from './API';


const Icons = ({ setComponent, setToggle, toggle }) => {

    return (
        <ul className="iconsUl">
            {APIs.map(api => (
                <li key={api.name} onClick={() => { setComponent(api.component); setToggle(!toggle) }}>
                    <img className="icon" src={api.img} />
                </li>
            ))}
        </ul>
    )
}

export default Icons;