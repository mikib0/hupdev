import { PiAngularLogoFill, PiCodepenLogoFill } from 'react-icons/pi';
import { BsApple, BsAndroid } from 'react-icons/bs';
import { TbBrandGoogleHome } from 'react-icons/tb';

import homeAppLogo1 from '../assets/material-symbols_home-app-logo-1.png';
import homeAppLogo from '../assets/material-symbols_home-app-logo.png';
import androidLogo from '../assets/ph_android-logo-fill.png';
import angularLogo from '../assets/ph_angular-logo-fill.png';
import appleLogo from '../assets/ph_apple-logo-fill.png';
import codepenLogo from '../assets/ph_codepen-logo-fill.png';

const TechIcons = () => {
  return (
    <div className='flex items-end justify-between mt-28 py-5'>
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
  );
};

export default TechIcons;
