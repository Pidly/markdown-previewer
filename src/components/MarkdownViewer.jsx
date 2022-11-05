import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import './MarkdownViewer.css';

function MarkdownViewer() {
    const markdown = "# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \n### And here's some other cool stuff:";
    return (
        <div id="markdown-container">
            <div className='toolbar'>
                <p>Previewer</p>
                <p>M</p>
            </div>
            <div className='previewer'>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownViewer;