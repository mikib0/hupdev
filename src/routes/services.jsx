import {
  BR,
  FAQ,
  Features,
  Gallery,
  Navbar,
  ServicesList,
  ThirdJumbotron,
} from '../components';
import { faqs } from '../constants';

export default function () {
  return (
    <div className='bg-gray text-white'>
      <Navbar />
      <section className='px-4 pt-12 md:pt-24 md:px-dx'>
        <h1 className='text-[24px] md:text-5xl font-semibold -mb-9 md:mb-4 text-center'>
          Transforming your businesses <BR /> with our solutions
        </h1>
        <Features />
        <p className='text-sm md:text-cxl text-center -mt-9 md:mt-4 mb-24'>
          We offer a comprehensive range of services to help our clients
          transform their businesses. Our services include software development,
          UI/UX design, illustration, digital marketing, IT training, system
          maintenance, and much more.unique business or personal needs.
        </p>
        <ServicesList />
        <section className='pt-24'>
          <img src='/map.png' className='mx-auto md:hidden' />
          <img src='/map_d.png' className='hidden md:block w-full' />
          <p className='text-sm text-center py-6 md:py-12 md:text-cxl'>
            We serve clients globally, and our scalable solutions are designed
            to meet their unique needs. Our commitment to quality and customer
            satisfaction drives everything we do. Regardless of your location,
            we are here to help you achieve your goals and transform your
            business.
          </p>
          <ul className='list-none pb-24'>
            {faqs['Services'].map((faq) => (
              <FAQ faq={faq} />
            ))}
          </ul>
        </section>
      </section>
      <Gallery />
      <ThirdJumbotron />
    </div>
  );
}
