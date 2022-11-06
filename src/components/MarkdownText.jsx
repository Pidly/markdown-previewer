import React from 'react';
import './MarkdownText.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';


function MarkdownText() {
    const message = useSelector((state) => state.message);

    const dispatch = useDispatch();

    const {setMessage} = bindActionCreators(actionCreators, dispatch);

    const handleMessageChange = event => {
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    return (
        <div id="markdown-text-container">
            <div className='toolbar'>
                <p>Editor</p>
                <p>M</p>
            </div>
            <div className='editor'>
                <textarea id="text-field" onChange={handleMessageChange} defaultValue={message}></textarea>
            </div>
        </div>
    );
}

export default MarkdownText;