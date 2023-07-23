import axios from 'axios';
import Image from 'next/image';
import { useLoaderData } from 'react-router-dom';
import { Navbar } from '@components';
import { API } from '@constants';

export default function ({ job }) {
  const {
    title,
    jobType,
    jobLocation,
    jobOverview,
    jobResponsibilities,
    jobRequirements,
  } = job;
  return (
    <div className='bg-gray text-white'>
      <Navbar bg='bg-gray' />
      <div className='px-4 pt-12 pb-24 md:px-dx'>
        <h1 className='font-semibold text-3xl md:text-5xl mb-3 text-center capitalize'>
          {title}
        </h1>
        <div className='flex items-center justify-center gap-4 mb-7'>
          <div className='flex items-center gap-2 text-sm md:text-base'>
            <Image
              width={16}
              height={16}
              src='/material-symbols_work-outline.png'
            />
            <span className='font-medium capitalize'>{jobType}</span>
          </div>
          <div className='flex items-center gap-2 text-sm md:text-base'>
            <Image
              width={16}
              height={16}
              src='/material-symbols_nest-remote-comfort-sensor-outline.png'
            />
            <span className='font-medium capitalize'>{jobLocation}</span>
          </div>
        </div>
        <div className='font-medium text-sm md:text-cxl'>
          <p className='mb-6'>
            Company Overview:
            <br /> HupDev Technologies is a leading software design and
            development agency that is committed to delivering cutting-edge
            solutions that drive business growth. We specialize in custom
            software development, web and mobile application development,
            e-commerce development, and more. Our team of experts works with
            clients across various industries to provide innovative and
            high-quality software solutions that meet their business needs and
            goals.
          </p>

          <p className='mb-6'>
            Job Overview:
            <br />
            {jobOverview}
          </p>
          <div className='mb-6'>
            Responsibilities:
            <br />
            <ul className='list-disc pl-8'>
              {jobResponsibilities.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className='mb-6'>
            Requirements: <br />
            <ul className='list-disc pl-8'>
              {jobRequirements.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            Why HupDev Technologies:
            <ul className='list-disc pl-8'>
              <li>Competitive salary and benefits package</li>
              <li>
                Opportunity to work on challenging and innovative projects with
                clients across various industries
              </li>
              <li>
                Collaborative and supportive work environment that encourages
                learning and growth
              </li>
              <li>Access to the latest design tools and technologies</li>
              <li>
                Opportunity to work with a talented and diverse team of experts
              </li>
            </ul>
            <p className='pt-4'>
              If you are passionate about design, user experience, and
              innovation, and you want to join a dynamic and growing team of
              experts, please send your resume and portfolio to{' '}
              <a href='mailto:careers@hupdev.com' className='text-orange'>
                careers@hupdev.com
              </a>
              . We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const response = await axios.get(API + '/getCareerDetails/' + params.id);
  return {
    props: {
      job: response.data.data,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get(API + '/getAllCareer');

  return {
    paths: response.data.data.map((job) => ({
      params: {
        id: job.jobId,
      },
    })),
    fallback: false,
  };
}
