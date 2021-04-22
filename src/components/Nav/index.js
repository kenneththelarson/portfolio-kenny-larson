import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header className="flex-row px-1">
            <h2 className="title">
                <a href="/About">Kenny Larson</a>
                <p className="subtitle">Full Stack Web Developer</p>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="/About">
                            About Me
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/Portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="Contact">
                            Contact
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="Resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;