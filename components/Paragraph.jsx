import React from 'react';

const Paragraph = ({ title, text, className, children, ...rest }) => {
  return (
    <div
      className={'text-center text-white' + (className ? ' ' + className : '')}
      {...rest}>
      <h2 className='text-3xl md:text-5xl font-semibold mb-2 md:mb-5'>
        {title}
      </h2>
      {/*TODO 3xl is 30pxl; heading is 28px in design */}
      <p className='text-sm md:text-xl'>{text ?? children}</p>
    </div>
  );
};

export default Paragraph;
