import Image from 'next/image';
import Link from 'next/link';

export default function Brand({ ...rest }) {
  return (
    <Link href='/' className='flex items-center font-medium' {...rest}>
      <Image src='/hupdev.png' alt='hupdev logo' width={26} height={36} />
      <h1 className='border-l-2 border-[#AAAAAA] pl-2 ml-2 text-white'>
        HupDev Tech
      </h1>
    </Link>
  );
}
