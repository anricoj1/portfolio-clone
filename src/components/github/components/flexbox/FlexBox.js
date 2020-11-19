/* react */
import React from 'react';

/* css */
import './FlexBox.css';


const FlexBox = ({ links, setComponent, publicRepos }) => {
    const setCollapse = () => {
        const toggler = document.querySelectorAll('flex-collapse div');

        toggler.classList.toggle('flex-collapsed');
    }

    return (
        <div className="container-fluid flexBox">
            <ul className="flex-links">
                {links.map((link, i) => (
                    <li className="flex-link" key={link.name} onClick={() => setComponent(link.component) }>
                        <span className={link.icon}>
                            {i !== 1 ? <span className="link-name">{link.name}</span> : <span className="link-name">Repositories<span className="Counter">{publicRepos}</span></span>}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="flex-collapse" onClick={() => setCollapse() }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default FlexBox;
