import React from 'react';

const Button = () => {
    return (
        <button className='md:flex absolute h-full top-0 left-0 lg:w-11 z-10 justify-center items-center focus:outline-none opacity-80 hover:opacity-100 bg-gradient-to-r from-gray-300 fine-transition' >
            <span className='material-design-icon chevron-left-icon bg-gray-200 text-gray-700 rounded-full block shadow-lg p-1 fine-transition'>
                <svg data-v-708b75e0="" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg"><path data-v-708b75e0="" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"><title data-v-708b75e0="">Chevron Right icon</title></path></svg>
            </span>
        </button>
    );
};

export default Button;