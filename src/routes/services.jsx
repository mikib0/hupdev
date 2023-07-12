import { FAQ, Features, Gallery, Navbar, ServicesList, ThirdJumbotron } from '../components';
import { faqs } from '../constants';

export default function () {
  return (
    <div className='bg-gray text-white'>
      <Navbar />
      <section className='px-4 pt-12'>
        <h1 className='text-[24px] font-semibold -mb-9 text-center'>
          Transforming your businesses with our solutions
        </h1>
        <Features />
        <p className='text-sm text-center -mt-9 mb-24'>
          We offer a comprehensive range of services to help our clients
          transform their businesses. Our services include software development,
          UI/UX design, illustration, digital marketing, IT training, system
          maintenance, and much more.unique business or personal needs.
        </p>
        <ServicesList />
        <section className='pt-24'>
          <img src='/map.png' className='mx-auto mb-6' />
          <p className='text-sm text-center mb-6'>
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
        <Gallery />
        <ThirdJumbotron />
      </section>
    </div>
  );
}
