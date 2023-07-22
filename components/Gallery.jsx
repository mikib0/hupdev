import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className='relative md:flex w-full'>
      {[
        'gallery_pic1.png',
        'gallery_pic2.png',
        'gallery_pic3.png',
        'gallery_pic4.png',
      ].map((pic, i) => (
        <Image
          src={'/' + pic}
          width={363}
          height={216}
          alt={'pic' + i}
          key={'pic' + i}
          className='object-cover md:hidden'
          data-aos='zoom-in'
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <div className='hidden md:block' data-aos='zoom-in'>
          <Image
            src={`/Rectangle 17${i}desktop.png`}
            key={i}
            className='object-contain'
            width={378}
            height={630}
            data-aos='zoom-in'
          />
        </div>
      ))}
      <Link
        href='/projects'
        className='bg-orange absolute right-1/2 translate-x-1/2 -bottom-4 text-black font-medium text-sm px-4 py-2 flex items-center justify-between'>
        <span>See Projects</span>
        <BsArrowRightShort size={16} />
      </Link>
    </section>
  );
}
