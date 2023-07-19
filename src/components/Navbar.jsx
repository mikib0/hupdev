import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Brand from './Brand'

export default function () {
  return (
    <nav
      className={`flex items-center justify-between bg-transparent py-2 px-4 md:px-dx`}>
      <Brand />
      <FiMenu className='text-white md:hidden' size={32} />
      <div className='hidden md:flex gap-12 text-white'>
        {['projects', 'services', 'company', 'careers', 'FAQ', 'contact'].map((el) => (
          <NavLink to={el == 'FAQ' ? '/faqs' : '/' + el}  className={({ isActive, isPending }) => 'capitalize font-medium text-base' + (isActive ? ' text-orange' : '') }>{el}</NavLink>
        ))}
      </div>
    </nav>
  );
}
