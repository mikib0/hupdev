import { PiAngularLogoFill, PiCodepenLogoFill } from 'react-icons/pi';
import { BsApple, BsAndroid } from 'react-icons/bs';
import { TbBrandGoogleHome } from 'react-icons/tb';

import { Button, Features, Gallery, SecondJumbotron, Testimonials, ThirdJumbotron } from '../components';

import homeAppLogo1 from '../assets/material-symbols_home-app-logo-1.png';
import homeAppLogo from '../assets/material-symbols_home-app-logo.png';
import androidLogo from '../assets/ph_android-logo-fill.png';
import angularLogo from '../assets/ph_angular-logo-fill.png';
import appleLogo from '../assets/ph_apple-logo-fill.png';
import codepenLogo from '../assets/ph_codepen-logo-fill.png';
import cardsImage from '../assets/cards.png';

export default function () {
  return (
    <div className='text-white'>
      <section className='bg-black  px-4 pt-16 pb-3'>
        <h1 className='font-semibold text-4xl'>
          Creating <span className='text-orange'>solutions</span>
          <br />
          that make the world go round
        </h1>
        <p className='font-normal my-6'>
          HupDev Technologies is a leading software design and development
          agency, committed to delivering cutting-edge solutions that drive
          business growth
        </p>
        <Button>Start a project</Button>
        <div className='flex items-end justify-between mt-28'>
          <img src={angularLogo} />
          <img src={androidLogo} />
          <img src={homeAppLogo} />
          <img src={appleLogo} />
          <img src={codepenLogo} />
          <img src={homeAppLogo1} />
          {/* <PiAngularLogoFill size={48} className='text-gray-light' />
        <BsApple size={48} className='text-gray-light' />
        <TbBrandGoogleHome size={48} className='text-gray-light' />
        <BsAndroid size={48} className='text-gray-light' />
        <PiCodepenLogoFill size={48} className='text-gray-light' />
        <TbBrandGoogleHome size={48} className='text-gray-light' /> */}
        </div>
      </section>
      <section className='py-20 bg-gray px-4'>
        <img src={cardsImage} className='mx-auto w-[150px] mb-4' />
        <p className='text-sm'>
          We are a top development agency that specializes in creating
          innovative and scalable solutions for businesses of all sizes. Our
          expertise in custom software development, web application development
          and mobile application development enables us to help businesses
          achieve their goals by creating solutions that are tailored to their
          specific needs.
        </p>
        <p className='text-sm my-8'>
          With our agile development process and innovation-driven approach, we
          create scalable and cloud-based solutions that help businesses achieve
          their digital transformation goals.
        </p>
        <Button>Who we are</Button>
      </section>
      <section className='bg-gray-light px-4 py-20'>
        <h2 className='text-3xl font-semibold text-center mb-2'>Solutions for Everyday</h2>{' '}
        {/*TODO 3xl is 30pxl; heading is 28px in design */}
        <p className='text-sm text-center'>
          We offer a wide range of services using the latest technologies and
          development methodologies to ensure that our clients receive the best
          possible solution that fits their unique business or personal needs.
        </p>
        <Features />
      </section>
      <SecondJumbotron />
      <Gallery />
      <Testimonials />
      <ThirdJumbotron />
    </div>
  );
}
