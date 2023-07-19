import React from 'react'

const Paragraph = ({ title, text, className, children }) => {
  return (
    <p className={'text-center text-white' + (className ? ' ' + className : '')}>
      <h2 className='text-3xl md:text-5xl font-semibold mb-2 md:mb-5'>{title}</h2>{' '}
      {/*TODO 3xl is 30pxl; heading is 28px in design */}
      <p className='text-sm md:text-xl'>{text ?? children}</p>
    </p>
  );
}

export default Paragraph