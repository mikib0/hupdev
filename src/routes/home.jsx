import {
  BR,
  Button,
  Features,
  Gallery,
  Navbar,
  SecondJumbotron,
  TechIcons,
  Testimonials,
  ThirdJumbotron,
} from '../components';
import cardsImage from '../assets/cards.png';

export default function () {
  return (
    <div className='text-white bg-black'>
      <Navbar />
      <section className='px-4 md:px-dx pt-16 pb-3'>
        <div className='flex gap-40 items-center'>
          <div>
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
          </div>
          <img src='/rocket.png' className='hidden md:block' />
        </div>
        <TechIcons />
      </section>
      <section className='py-20 bg-gray md:flex md:flex-row-reverse md:gap-4 px-4 md:px-dx md:items-center'>
        <img src='cards.png' className='mx-auto md:w-auto mb-4 md:m-0' />
        <div>
          <p className='text-sm'>
            We are a top development agency that specializes in creating
            innovative and scalable solutions for businesses of all sizes. Our
            expertise in custom software development, web application
            development and mobile application development enables us to help
            businesses achieve their goals by creating solutions that are
            tailored to their specific needs.
          </p>
          <p className='text-sm my-8'>
            With our agile development process and innovation-driven approach,
            we create scalable and cloud-based solutions that help businesses
            achieve their digital transformation goals.
          </p>
          <Button>Who we are</Button>
        </div>
      </section>
      <section className='bg-gray-light px-4 md:px-dx py-20'>
        <h2 className='text-3xl font-semibold text-center mb-2'>
          Solutions for Everyday
        </h2>{' '}
        {/*TODO 3xl is 30pxl; heading is 28px in design */}
        <p className='text-sm text-center'>
          We offer a wide range of services using the latest technologies and
          development methodologies to ensure that <BR /> our clients receive
          the best possible solution that fits their unique business or personal
          needs.
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
