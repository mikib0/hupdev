import { useLoaderData } from 'react-router-dom';
import { Navbar } from '../components';
import { jobs } from '../constants';

export function loader({ params }) {
  return jobs[params.id];
}

export default function () {
  const { role, type, location, overview, responsibilities, requirements } =
    useLoaderData();
  return (
    <div className='bg-gray text-white'>
      <Navbar />
      <div className='px-4 pt-12 pb-24'>
        <h1 className='font-semibold text-3xl mb-3 text-center capitalize'>
          {role}
        </h1>
        <p className='flex items-center justify-center gap-4 mb-7'>
          <div className='flex items-center gap-2'>
            <img src='/material-symbols_work-outline.png' />
            <span className='font-medium text-sm capitalize'>{type}</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src='/material-symbols_nest-remote-comfort-sensor-outline.png' />
            <span className='font-medium text-sm capitalize'>{location}</span>
          </div>
        </p>
        <div className='font-medium text-sm'>
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
            {overview}
          </p>
          <p className='mb-6'>
            Responsibilities:
            <br />
            <ul>
              {responsibilities.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </p>
          <p className='mb-6'>
            Requirements: <br />
            <ul>
              {requirements.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </p>
          <p>
            Why HupDev Technologies:
            <br /> Competitive salary and benefits package Opportunity to work
            on challenging and innovative projects with clients across various
            industries Collaborative and supportive work environment that
            encourages learning and growth Access to the latest design tools and
            technologies Opportunity to work with a talented and diverse team of
            experts <br />
            If you are passionate about design, user experience, and innovation,
            and you want to join a dynamic and growing team of experts, please
            send your resume and portfolio to{' '}
            <a href='mailto:careers@hupdev.com' className='text-orange'>
              careers@hupdev.com
            </a>
            . We look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
}
