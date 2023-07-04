import { Link } from 'react-router-dom';
import Brand from './Brand';

const FooterLink = ({ children, to, ...rest }) => (
  <Link
    to={to ?? children}
    className='font-normal text-sm mt-2 block'
    {...rest}>
    {children[0].toUpperCase() + children.substring(1)}
  </Link>
);

export default function Footer() {
  return (
    <footer className='bg-gray-light text-white pt-8 pb-12 px-4'>
      <Brand />
      <h4 className='font-semibold text-base mt-4 mb-2'>
        Solutions for Everyday
      </h4>
      <p className='font-normal text-sm'>
        HupDev Technologies is a leading software design and development agency,
        committed to delivering cutting-edge solutions that drive business
        growth.
      </p>
      <div className='mt-8'>
        <h5 className='font-semibold text-base'>Menu</h5>
        {['projects', 'services', 'company', 'contact'].map((el) => (
          <FooterLink>{el}</FooterLink>
        ))}
      </div>
      <div className='my-8'>
        <h5 className='font-semibold text-base'>Socials</h5>
        {['facebook', 'instagram', 'twitter', 'linkedIn'].map((el) => (
          <FooterLink>{el}</FooterLink>
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        <a href='mailto:info@hupdev.com' className='underline text-sm'>
          info@hupdev.com
        </a>
        <a href='tel:+234 812 3456 3457' className='underline text-sm'>
          +234 812 3456 3457
        </a>
        <a href='tel:+234 812 3456 3457' className='underline text-sm'>
          +234 812 3456 3457
        </a>
        <p className='text-sm'>No 4, Ado Ekiti Close, Area 11, Abuja</p>
      </div>
      <hr className='my-8' />
      <p className='text-center text-sm mb-8'>© 2023 HupDev Technologies, All Rights Reserved.</p>
    </footer>
  );
}
