import React from 'react'

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-3'>
      <a href='mailto:info@hupdev.com' className='underline text-sm'>
        info@hupdev.com
      </a>
      <a href='tel:+234 812 3456 3457' className='underline text-sm'>
        +234 812 3456 3457
      </a>
      <a href='tel:+234 812 3456 3457' className='underline text-sm'>
        +234 812 3456 3457
      </a>
      <p className='text-sm underline'>No 4, Ado Ekiti Close, Area 11, Abuja</p>
    </div>
  );
}

export default ContactInfo