import React from 'react';

const BloqueInfoB = ({title, subtitle, date, text, items}) => {
    return(
        <div className= 'grid place-items-center sm:items-start bg-indigo-600'>
            <span className='EstiloTitulosB' > {title} </span>
            <span className='text-center font-serif font-light align-middle mx-4 my-2 md:mx-40 lg:mx-40 text-white '> {subtitle}</span>
            <span className='EstiloTextoB'> {date} </span>
            <span className='text-center font-serif font-light align-middle mx-4 my-2 md:mx-40 lg:mx-40 text-xs text-white' > {text}</span>
            <span className='text-center font-serif font-light align-middle mx-4 my-2 md:mx-40 lg:mx-40 text-xs text-white '> {items}</span>
        </div>
    );
};

export default BloqueInfoB;