import React from 'react';

const ContactInfo = ({ ...rest }) => {
  return (
    <div className='flex flex-col gap-3 md:gap-8' {...rest}>
      <a href='mailto:info@hupdev.com' className='underline text-sm'>
        info@hupdev.com
      </a>
      <div>
        <a href='tel:+234 812 3456 3457' className='underline text-sm'>
          +234 812 3456 3457
        </a>
        <a href='tel:+234 812 3456 3457' className='underline text-sm'>
          +234 812 3456 3457
        </a>
      </div>
      <p className='text-sm underline'>No 4, Ado Ekiti Close, Area 11, Abuja</p>
    </div>
  );
};

export default ContactInfo;
