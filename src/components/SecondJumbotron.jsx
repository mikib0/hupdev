import illustration from '../assets/ppl_illustation.png';
import Button from './Button';

export default function() {
  return (
    <section className='py-24 bg-gray px-4'>
      <img src={illustration} alt='people illustration' className='mx-auto' />
      <p className='text-sm mt-6 mb-4'>
        At HupDev Technologies, we follow an agile development process to ensure
        that we deliver high-quality solutions that meet our clients' needs. Our
        innovation-driven solutions and focus on quality assurance and testing
        ensure that our clients receive the best possible outcome. We are
        committed to providing excellent maintenance and support services to
        ensure that our clients' solutions remain up-to-date and continue to
        drive their business growth.
      </p>
      <Button>Who we are</Button>
    </section>
  );
}
