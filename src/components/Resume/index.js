import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
    return (
        <div>
            <p>Click icon to download my resume.</p>
            <div>
                <a className="download" href="/assets/resume/Kenneth Larson Resume 2021.pdf" download type="application/pdf"><AiOutlineDownload /></a>
            </div>
        </div>
    )
}

export default Resume;