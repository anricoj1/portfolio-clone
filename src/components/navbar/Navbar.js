/* react */
import React from 'react';

/* css */
import './Navbar.css';


const Navbar = () => {
    const setToggle = () => {
        const nav = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('active-nav');

        links.forEach((link, i) => {
            if (link.style.animation) return link.style.animation = '';
            link.style.animation = `linkFade 0.5s ease forwards ${i / 7 + 1}s`;
        });
    }

    const handleScroll = () => {
        window.onscroll = () => {
            const nav = document.getElementById('global-nav');

            if (window.scrollY > 1) {
                if (window.innerWidth < 991) {
                    return nav.classList.remove('scrolled-nav');
                }
                return nav.classList.add('scrolled-nav');
            }
            return nav.classList.remove('scrolled-nav');
        }
    }

    return (
        <div className="container-fluid" onScroll={handleScroll()}>
            <a className="navbar-brand">Jason Anrico</a>
            <ul className="nav-links">
                <li className="scrollD">
                    Home
                </li>
                <li className="scrollD">
                    About
                </li>
                <li className="scrollD">
                    Projects
                </li>
            </ul>
            <div className="toggler" onClick={() => setToggle()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Navbar;