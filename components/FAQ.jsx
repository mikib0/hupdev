import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const FAQ = ({ faq: { question, answer }, ...rest }) => {
  const [expand, setExpand] = useState(false);
  return (
    <li className='border-b-[0.8px] border-white' {...rest}>
      <div
        className='flex justify-between items-center font-medium py-4 md:py-7 cursor-pointer'
        onClick={() => setExpand((expand) => !expand)}>
        <span className='text-sm md:text-cxl'>{question}</span>
        <AiOutlinePlus
          size={16}
          className={'transition-all' + (expand ? ' rotate-45' : '')}
        />
      </div>
      <div
        style={{ gridTemplateRows: expand ? '1fr' : '0fr' }}
        className='grid transition-all'>
        <div className='overflow-hidden'>
          <p className='pb-4'>{answer}</p>
        </div>
      </div>
    </li>
  );
};

export default FAQ;
