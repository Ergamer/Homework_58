import React from 'react';
import './Alert.css';


const Alert = props => {
    return (
        <div className="Alert">
            <div className={['Alert', props.type].join(' ')}>
                {props.dismiss ? <span> X </span> : undefined}
                {props.children}
            </div>
        </div>
    )

};

export default Alert;


