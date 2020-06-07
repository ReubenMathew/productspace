import React, {useState} from 'react'

import Button from './Button'
function Nav(props){
    
    const [projectName, setProjectName] = useState(props.projectName);
    const [docs, setDocs] = useState(props.docs);
    const [author, setAuthor] = useState(props.author);

    return (
        <div className="flex flex-row items-center justify-between w-full px-6 py-4 text-left bg-white border-b-1 md:px-32 border-accent2">
            <div className="flex items-center justify-between w-full sm:w-auto">
                <svg className="mr-4" width="60" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23.5" cy="19.5" r="15.5" fill="#fff" stroke="#666" stroke-width="4"/><circle cx="40.5" cy="19.5" r="15.5" stroke="#444" stroke-width="4"/></svg>
                <a href="https://github.com/ReubenMathew/VennFX">
                    <div className="hidden mr-4 sm:block text-accent4">{projectName}</div>
                </a>
                <div className="hidden ml-10 sm:block sm:ml-1">
                    <a href={`${docs}`}>
                        <Button py="1" px="4" type="secondary" text="Documentation"/>
                    </a>
                </div>
                <div className="block sm:hidden sm:ml-1">
                    <a href={`${docs}`}>
                        <Button py="1" px="4" type="secondary" text="Docs"/>
                    </a>
                </div>
            </div>
            <div className="flex hidden sm:block">
                <div>
                    <span className="text-accent4">{author}</span>
                </div>
            </div>
        </div>
    );
}

export default Nav;