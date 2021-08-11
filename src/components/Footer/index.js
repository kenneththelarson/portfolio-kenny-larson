import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <div className="center">
            <div className="footer">
                <a href="https://github.com/kenneththelarson"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/kenny-larson/"><AiFillLinkedin /></a>
            </div>
        </div>
    )
}

export default Footer;