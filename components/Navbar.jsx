import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Brand from './Brand';
import { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

export default function ({ bg }) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? AiOutlineMenuUnfold : FiMenu;

  return (
    <nav
      className={`flex items-center justify-between py-2 px-4 md:px-dx fixed left-0 right-0 z-20 md:relative ${bg}`}>
      <Brand data-aos='slide-right' />
      <MenuIcon
        className='text-white md:hidden'
        size={32}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      />
      <div
        style={{ gridTemplateRows: showMenu ? '1fr' : '0fr' }}
        className={`absolute top-full md:top-0 z-10 shadow-xl shadow-gray-light md:shadow-none pb-3 md:pb-0 px-4 left-0 right-0 transition-all duration-500 grid md:block md:relative text-white ${bg}`}
        // data-aos='slide-left' // TODO
      >
        <div className='flex flex-col md:flex-row md:gap-12 overflow-hidden'>
          {['projects', 'services', 'company', 'careers', 'FAQ', 'contact'].map(
            (el) => {
              const route = '/' + (el == 'FAQ' ? 'faqs' : el);
              return (
                <Link
                  href={route}
                  className={
                    'capitalize font-medium text-base hover:text-orange py-1 md:py-0' +
                    (router.pathname == route ? ' text-orange' : '')
                  }>
                  {el}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
}
