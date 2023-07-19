import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BR, Navbar } from '../components';
import { jobs } from '../constants';

export default function () {
  const [jobsAvailable] = useState(Date.now() % 2);
  return (
    <div className='text-white bg-gray'>
      <Navbar />
      <div className='pt-12 pb-24 px-4 md:px-dx'>
        <h1 className='font-semibold text-3xl md:text-5xl text-center mb-7 md:mb-5'>
          Join Our Team
        </h1>
        <p className='text-sm text-center mb-7 md:text-cxl'>
          At HupDev Technologies, we are always on the lookout for talented and
          passionate individuals who share our commitment to delivering
          innovative and high-quality software solutions. As a leading software
          design and development agency, we work with clients across various
          industries to help them achieve their business goals and drive growth
          and success.
        </p>
        <p className='text-sm text-center md:text-cxl'>
          To apply for a position at HupDev Technologies, please send your
          resume and cover letter to{' '}
          <a href='mailto:careers@hupdev.com' className='text-orange'>
            careers@hupdev.com
          </a>
          . We will review your application and get in touch with you if your
          qualifications and experience match our current needs. Thank you for
          your interest in joining our team!
        </p>
        <section className='pt-14 md:pt-24 flex gap-2 md:gap-7 flex-wrap md:flex-nowrap'>
          {true ? (
            jobs.map(({ id, role, type, location, shortDesc }) => (
              <Link to={'/careers/' + id}>
                <div className='border-2 border-white p-5 basis-[370px]'>
                  <h2 className='capitalize font-semibold text-lg mb-2 md:mb-3 md:text-[24px] md:leading-[28.18px]'>
                    {role}
                  </h2>
                  <p className='flex items-center gap-4 mb-2 md:mb-3'>
                    <div className='flex items-center gap-2'>
                      <img src='/material-symbols_work-outline.png' />
                      <span className='font-medium text-sm capitalize'>
                        {type}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <img src='/material-symbols_nest-remote-comfort-sensor-outline.png' />
                      <span className='font-medium text-sm capitalize'>
                        {location}
                      </span>
                    </div>
                  </p>
                  <p className='text-sm md:text-cxl'>{shortDesc}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-center text-sm md:text-cxl w-full'>
              There are no job openings at the moment.
              <BR /> Sign up to our newsletter to be the first to know when
              there is an opening.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
