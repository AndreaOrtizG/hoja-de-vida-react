import React from 'react';

const BloqueNormalB = ({title,text}) => {
    return(
        <div className= 'grid place-items-center sm:items-stretch bg-indigo-600'>
            <span className='EstiloTitulosB' > {title} </span>
            <span className='EstiloTextoB'> {text} </span>
        </div>
    );
};

export default BloqueNormalB;
