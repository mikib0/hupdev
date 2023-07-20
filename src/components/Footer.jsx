import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import Brand from './Brand';

const FooterLink = ({ children, href, ...rest }) => (
  <Link
    to={href ?? children}
    className='font-normal text-sm mt-2 md:mt-8 block'
    {...rest}>
    {children[0].toUpperCase() + children.substring(1)}
  </Link>
);

export default function Footer() {
  return (
    <footer className='bg-gray-light text-white pt-8 md:pt-24 pb-12 md:pb-40 px-4 md:px-dx'>
      <div className='md:flex md:justify-between'>
        <div className='md:w-[396px]'>
          <Brand />
          <h4 className='font-semibold text-base mt-4 mb-2 md:text-xl'>
            Solutions for Everyday
          </h4>
          <p className='font-normal text-sm md:text-xl'>
            HupDev Technologies is a leading software design and development
            agency, committed to delivering cutting-edge solutions that drive
            business growth.
          </p>
        </div>
        <div className='mt-8 md:mt-0'>
          <h5 className='font-semibold text-base md:text-lg'>Menu</h5>
          {['projects', 'services', 'company', 'contact'].map((el) => (
            <FooterLink>{el}</FooterLink>
          ))}
        </div>
        <div className='my-8 md:mt-0'>
          <h5 className='font-semibold text-base md:text-lg'>Socials</h5>
          {[
            {
              platform: 'facebook',
              href: 'https://web.facebook.com/hupdev',
            },
            {
              platform: 'instagram',
              href: 'https://instagram.com/hupdevtech',
            },
            { platform: 'twitter', href: 'https://twitter.com/Hupdevtech' },
            {
              platform: 'linkedIn',
              href: 'https://ng.linkedin.com/company/hupdev',
            },
          ].map(({ platform, href }) => (
            <FooterLink href={href}>{platform}</FooterLink>
          ))}
        </div>
        <ContactInfo />
      </div>
      <div>
        <hr className='my-8' />
        <p className='text-center text-sm mb-8 md:text-left'>
          © 2023 HupDev Technologies, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
