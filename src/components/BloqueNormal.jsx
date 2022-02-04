import React from 'react';

const BloqueNormal = ({title,text}) => {
    return(
        <div className= 'grid place-items-center sm:items-start'>
            <span className='EstiloTitulos' > {title} </span>
            <span className='EstiloTexto'> {text} </span>
        </div>
    );
};

export default BloqueNormal;

