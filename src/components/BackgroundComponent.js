/* react */
import React from 'react';

/* components */
import Icons from './Icons';

/* css */
import './App.css';


const BackgroundComponent = ({ setComponent, setToggle, toggle }) => {

    return (
        <div className="homeDiv">
            <h2 className="titleMain">Jason Anrico</h2>
            <div className="icons">
                <Icons setComponent={e => setComponent(e)} setToggle={e => setToggle(e)} toggle={toggle} />
            </div>
        </div>
    )
}

export default BackgroundComponent;