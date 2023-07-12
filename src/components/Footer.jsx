import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
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
      <ContactInfo />
      <hr className='my-8' />
      <p className='text-center text-sm mb-8'>© 2023 HupDev Technologies, All Rights Reserved.</p>
    </footer>
  );
}
