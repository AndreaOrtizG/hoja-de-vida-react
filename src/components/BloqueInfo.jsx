import React from 'react';

const BloqueInfo = ({title, subtitle, date, text, items}) => {
    return(
        <div className= 'grid place-items-center sm:items-start'>
            <span className='EstiloTitulos' > {title} </span>
            <span className='text-center font-serif font-light align-middle mx-4 my-2 md:mx-40 lg:mx-40 '> {subtitle}</span>
            <span className='EstiloTexto'> {date} </span>
            <span className='text-center font-serif font-light align-middle mx-4 my-2 md:mx-40 lg:mx-40 text-xs'> {text}</span>
            <span className='text-center font-serif font-light align-middle mx-4 my-3 md:mx-40 lg:mx-40 text-xs'> {items}</span>
        </div>
    );
};

export default BloqueInfo;
