import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownViewer.css';
import { useSelector } from 'react-redux';


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

function MarkdownViewer() {
    const message = useSelector((state) => state.message);
    
    return (
        <div id="markdown-container">
            <div className='toolbar'>
                <p>Previewer</p>
                <p>M</p>
            </div>
            <div id="previewer-container">
                <div id='previewer'>
                    <ReactMarkdown 
                        children={message} 
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({node, inline, className, children, ...props}) {
                              const match = /language-(\w+)/.exec(className || '')
                              return !inline && match ? (
                                <SyntaxHighlighter
                                  children={String(children).replace(/\n$/, '')}
                                  style={dark}
                                  language={match[1]}
                                  PreTag="div"
                                  {...props}
                                />
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              )
                            }
                        }}                      
                    />
                </div>
            </div>
        </div>
    );
}
export default MarkdownViewer;