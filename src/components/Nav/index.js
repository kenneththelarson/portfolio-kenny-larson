import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <h2 className="title">
                <a href="/">Kenny Larson</a>
                <p className="subtitle">Full Stack Web Developer</p>
            </h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/About">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="Contact">
                            Contact
                        </Link>
                    </li>
                    <li>
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