import { paddingHorizontal } from '../constants';

export default function NewsLetter() {
  return (
    <section
      className={`flex flex-col justify-start bg-orange-light text-xl py-8 px-4`}>
      <h3 className='text-gray-light font-semibold text-xl'>
        Subscribe to our newsletter
      </h3>
      <p className='text-sm text-gray-light'>
        Stay informed about our innovative solutions, product launches, and
        industry trends. Join us today by signing up for our newsletter.
      </p>
      <input placeholder='Email Address' className='border-2 placeholder:text-gray-light border-gray-light bg-transparent font-medium text-sm capitalize py-2 px-3 mt-5 mb-3'/>
      {/* TODO create a custom border for 1px */}
      <button className='bg-gray-light py-4 text-white text-sm'>Subscribe</button>
    </section>
  );
}
