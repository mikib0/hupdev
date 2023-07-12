import { FiMenu } from 'react-icons/fi';
import Brand from './Brand'

export default function () {
  return (
    <nav className={`flex items-center justify-between bg-transparent py-2 px-4`}>
      <Brand />
      <FiMenu className='text-white' size={32} />
    </nav>
  );
}
