/* react */
import React, { useState } from 'react';

/* components */
import BackgroundComponent from './components/BackgroundComponent';
import Navbar from './components/navbar/Navbar';

/* css */
import './components/App.css';


const App = () => {
    /* state */
    const [component, setComponent] = useState(null);
    const [toggle, setToggle] = useState(false);

    /* ref */
    const ref = (e) => {
       document.getElementById('component').scrollIntoView({ behavior : 'smooth'});
    }

    return (
        <div className="App">
            <div className="navbar fixed-top navbar-expand-lg" id="global-nav">
                <Navbar />
            </div>
            <div className="homeImg">
                <BackgroundComponent setComponent={e => setComponent(e)} setToggle={e => setToggle(e)} toggle={toggle} />
            </div>
            <div id="component" ref={ref}></div>
            {toggle ? component : null}
        </div>
    )
}

export default App;