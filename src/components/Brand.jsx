import hupdevLogo from '../assets/hupdev.png';

export default function Brand() {
  return (
    <div className='flex items-center font-medium'>
      <img src={hupdevLogo} alt='hupdev logo' />
      <h1 className='border-l-2 border-[#AAAAAA] pl-2 ml-2 text-white'>
        HupDev Tech
      </h1>
    </div>
  );
}
