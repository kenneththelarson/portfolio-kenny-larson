import React from 'react';

function Nav() {
    return (
        <header>
            <h2 className="title">
                <a href="/">Kenny Larson</a>
                <p className="subtitle">Full Stack Web Developer</p>
            </h2>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;