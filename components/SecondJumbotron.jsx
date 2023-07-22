import Image from 'next/image';
import LinkButton from './LinkButton';

export default function () {
  return (
    <section className='py-24 bg-gray px-4 md:px-dx md:flex md:gap-5 md:items-center'>
      <Image
        src='/ppl_illustration.png'
        alt='people illustration'
        className='mx-auto'
        data-aos='slide-left'
        width={571}
        height={300}
      />
      <div data-aos='slide-right'>
        <p className='text-sm mt-6 mb-4 md:mt-0'>
          At HupDev Technologies, we follow an agile development process to
          ensure that we deliver high-quality solutions that meet our clients'
          needs. Our innovation-driven solutions and focus on quality assurance
          and testing ensure that our clients receive the best possible outcome.
          We are committed to providing excellent maintenance and support
          services to ensure that our clients' solutions remain up-to-date and
          continue to drive their business growth.
        </p>
        <LinkButton href='#'>Who we are</LinkButton>
      </div>
    </section>
  );
}
