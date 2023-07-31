import { AiFillCheckCircle } from 'react-icons/ai';

export default function Toast({ text }) {
  return (
    <div
      className={`fixed top-20 right-3 md:top-14 md:right-10 text-base md:text-lg bg-orange-light z-10 rounded-2xl drop-shadow-2xl shadow-slate-500 flex items-center gap-2 px-4 py-2`}
      data-aos='slide-left'>
      <AiFillCheckCircle className='text-black' size={24} />
      <span className='text-black'>{text}</span>
    </div>
  );
}
