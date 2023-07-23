import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BR, Navbar } from '@components';
import { API } from '@constants';
import Image from 'next/image';

export default function ({ jobs }) {
  const jobsAvailable = jobs.length !== 0;

  return (
    <div className='text-white bg-gray'>
      <Navbar bg='bg-gray' />
      <div className='pt-24 pb-24 px-4 md:px-dx'>
        <h1
          className='font-semibold text-3xl md:text-5xl text-center mb-7 md:mb-5'
          data-aos='slide-right'>
          Join Our Team
        </h1>
        <p className='text-sm text-center mb-7 md:text-cxl' data-aos='slide-up'>
          At HupDev Technologies, we are always on the lookout for talented and
          passionate individuals who share our commitment to delivering
          innovative and high-quality software solutions. As a leading software
          design and development agency, we work with clients across various
          industries to help them achieve their business goals and drive growth
          and success.
        </p>
        <p className='text-sm text-center md:text-cxl' data-aos='slide-up'>
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
          {jobsAvailable ? (
            jobs.map(
              ({ jobId, title, jobType, jobLocation, shortDescription }, i) => (
                <Link
                  href={'/careers/' + jobId}
                  data-aos={i % 2 == 0 ? 'slide-right' : 'slide-left'}>
                  <div className='border-2 border-white p-5 basis-[370px]'>
                    <h2 className='capitalize font-semibold text-lg mb-2 md:mb-3 md:text-[24px] md:leading-[28.18px]'>
                      {title}
                    </h2>
                    <div className='flex items-center gap-4 mb-2 md:mb-3'>
                      <div className='flex items-center gap-2'>
                        <Image
                          width={16}
                          height={16}
                          src='/material-symbols_work-outline.png'
                        />
                        <span className='font-medium text-sm capitalize'>
                          {jobType}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Image
                          width={16}
                          height={16}
                          src='/material-symbols_nest-remote-comfort-sensor-outline.png'
                        />
                        <span className='font-medium text-sm capitalize'>
                          {jobLocation}
                        </span>
                      </div>
                    </div>
                    <p className='text-sm md:text-cxl'>{shortDescription}</p>
                  </div>
                </Link>
              )
            )
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

export async function getStaticProps() {
  const response = await axios.get(API + '/getAllCareer');
  return {
    props: {
      jobs: response.data.data,
    },
  };
}
