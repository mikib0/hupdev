export default function NewsLetter() {
  return (
    <section
      className={`flex flex-col justify-start md:flex-row md:justify-between md:gap-32 md:items-center bg-orange-light text-xl py-8 px-4 md:px-dx`}>
      <div>
        <h3 className='text-gray-light font-semibold text-xl'>
          Subscribe to our newsletter
        </h3>
        <p className='text-sm text-gray-light'>
          Stay informed about our innovative solutions, product launches, and
          industry trends. Join us today by signing up for our newsletter.
        </p>
      </div>
      <div className='md:flex md:gap-3'>
        <input
          placeholder='Email Address'
          className='border-[1px] placeholder:text-gray-light w-full md:w-[328px] border-gray-light bg-transparent font-medium text-sm capitalize py-2 px-3 mt-5 mb-3 md:m-0'
        />
        {/* TODO create a custom border for 1px */}
        <button className='bg-gray-light block w-full md:w-auto py-4 md:py-3 md:px-6 text-white text-sm'>
          Subscribe 
        </button>
      </div>
    </section>
  );
}
