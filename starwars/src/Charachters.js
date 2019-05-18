import React from 'react';
import Charachter from './Charachter';

const Charachters = (props) => {
    return (
    <div>
        {props.charachterData.map(item => {
            return  (
                <div>
                    <Charachter charachterData={item}/>
                </div>
            );
        })}
    </div>
    );
}

export default Charachters;