import { AiOutlinePlus } from 'react-icons/ai';

const FAQ = ({ faq: { question, answer } }) => {
  return (
    <li className='flex justify-between items-center font-medium py-4 md:py-7 border-b-[0.8px] border-white'>
      <span className='text-sm md:text-cxl'>{question}</span> <AiOutlinePlus size={16} />
      {/* TODO implement accordion collapse */}
    </li>
  );
};

export default FAQ;
