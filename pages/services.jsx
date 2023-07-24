import {
  BR,
  FAQ,
  MapImage,
  Features,
  Gallery,
  ServicesList,
  ThirdJumbotron,
} from '../components';
import { faqs } from '../constants';

export default function () {
  return (
    <div className='bg-gray text-white'>
      <section className='px-4 pt-24 md:px-dx'>
        <h1
          className='text-[24px] md:text-5xl font-semibold -mb-9 md:mb-4 text-center'
          data-aos='slide-up'>
          Transforming your businesses <BR /> with our solutions
        </h1>
        <Features />
        <p
          className='text-sm md:text-cxl text-center -mt-9 md:mt-4 mb-24'
          data-aos='slide-up'>
          We offer a comprehensive range of services to help our clients
          transform their businesses. Our services include software development,
          UI/UX design, illustration, digital marketing, IT training, system
          maintenance, and much more.unique business or personal needs.
        </p>
        <ServicesList />
        <section className='pt-24'>
          <MapImage />
          <p
            className='text-sm text-center py-6 md:py-12 md:text-cxl'
            data-aos='slide-up'>
            We serve clients globally, and our scalable solutions are designed
            to meet their unique needs. Our commitment to quality and customer
            satisfaction drives everything we do. Regardless of your location,
            we are here to help you achieve your goals and transform your
            business.
          </p>
          <ul className='list-none pb-24'>
            {faqs['Services'].map((faq, i) => (
              <FAQ
                faq={faq}
                data-aos={i % 2 == 0 ? 'slide-right' : 'slide-left'}
              />
            ))}
          </ul>
        </section>
      </section>
      <Gallery />
      <ThirdJumbotron />
    </div>
  );
}
