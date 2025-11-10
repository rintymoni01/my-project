import React from 'react';

const SectionHeading = ({heading ,colorHeading ,discription}) => {
    return (
        <div className=''>
            <div>
                <h3 className='text-4xl tc font-semibold'>{heading} <span className='th'>{colorHeading}</span></h3>
                <p className='tx pt-2'>{discription}</p>
            </div>
        </div>
    );
};

export default SectionHeading;