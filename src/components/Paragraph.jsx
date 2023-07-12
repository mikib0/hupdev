import React from 'react'

const Paragraph = ({ title, text, className }) => {
  return (
    <p className={'text-center text-white' + (className ? ' ' + className : '')}>
      <h2 className='text-3xl font-semibold mb-2'>{title}</h2>{' '}
      {/*TODO 3xl is 30pxl; heading is 28px in design */}
      <p className='text-sm'>{text}</p>
    </p>
  );
}

export default Paragraph