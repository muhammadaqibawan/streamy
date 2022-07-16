import React from 'react';
import { createPortal } from "react-dom";

const Model = props => {
    return createPortal(
        <div onClick={props.Dismiss} className='ui dimmer modals visible active'>
            <div onClick={e=> e.stopPropagation()} className='ui standard modal visible active'>
            <div className="header">{ props.header }</div>
                <div className="content">
                    <p>{ props.content }</p>
                </div>
                <div className="actions">
                    { props.action }
                </div>
            </div>
        </div>, 
        document.querySelector("#modal")
        )
};

export default Model;