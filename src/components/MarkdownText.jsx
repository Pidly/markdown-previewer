import React from 'react'
import ReactDom from 'react-dom'
import './MarkdownText.css'

function MarkdownText() {
    
    const handleMessageChange = event => {
        console.log(event.target.value);
    }

    return (
        <div id="markdown-text-container">
            <div className='toolbar'>
                <p>Editor</p>
                <p>M</p>
            </div>
            <div className='editor'>
                <textarea id="text-field" onChange={handleMessageChange}>Test text area.</textarea>
            </div>
        </div>
    );
}

export default MarkdownText;