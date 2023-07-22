import Image from 'next/image';

const TechIcons = () => {
  return (
    <div
      className='flex items-end justify-between mt-28 py-5'
      data-aos='slide-up'>
      <Image
        width={48}
        height={48}
        src='/material-symbols_home-app-logo-1.png'
      />
      <Image width={48} height={48} src='/material-symbols_home-app-logo.png' />
      <Image width={48} height={48} src='/ph_android-logo-fill.png' />
      <Image width={48} height={48} src='/ph_angular-logo-fill.png' />
      <Image width={48} height={48} src='/ph_apple-logo-fill.png' />
      <Image width={48} height={48} src='/ph_codepen-logo-fill.png' />
    </div>
  );
};

export default TechIcons;
