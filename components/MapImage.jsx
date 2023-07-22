import Image from 'next/image';

export default function MapImage() {
  return (
    <>
      <Image
        src='/map.png'
        className='mx-auto mb-6 md:hidden'
        width={361}
        height={153}
        data-aos='zoom-in'
      />
      <Image
        src='/map_d.png'
        className='hidden md:my-[75px]  md:block'
        width={1258}
        height={532}
        data-aos='zoom-in'
      />
    </>
  );
}
