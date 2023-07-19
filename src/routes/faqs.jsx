import React from 'react';
import { FAQ, Navbar } from '../components';
import { faqs } from '../constants';

export default function () {
  return (
    <div className='text-white bg-gray'>
      <Navbar />
      <div className='pt-12 md:pt-48 pb-24 md:pb-36 px-4 md:px-dx'>
        <h1 className='font-semibold text-4xl md:text-6xl text-center mb-7'>FAQs</h1>
        {Object.entries(faqs).map(([category, catFaqs], i) => {
          return (
            <section>
              <h2
                className={`text-sm md:text-cxl font-normal font-dm-sans m-0 ${i !== 0 ? 'mt-24' : ''}`}>
                {category}
              </h2>
              {/* TODO (dm sans) */}
              <ul className='list-none'>
                {catFaqs.map((faq) => (
                  <FAQ faq={faq} />
                ))}
              </ul>
            </section>
          );
        })}
        <p className='mt-7'>
          Have more questions for us? Drop us a{' '}
          <a href='#' className='text-orange'>
            message
          </a>{' '}
          or send us an email at{' '}
          <a href='#' className='text-orange'>
            info@hupdev.com
          </a>
        </p>
      </div>
    </div>
  );
}
