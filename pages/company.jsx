import { team } from '../constants';
import { BsArrowRightShort } from 'react-icons/bs';
import { BR, MapImage, TechIcons, ThirdJumbotron } from '../components';
import Image from 'next/image';

const TeamMember = ({ member: { avatar, name, title } }) => (
  <div className='flex flex-col items-center'>
    <Image
      src={avatar}
      className='mb-4'
      data-aos='zoom-in'
      width={100}
      height={100}
    />
    <h4 className='text-2xl font-semibold mb-1' data-aos='slide-up'>
      {name}
    </h4>
    <p className='text-lg' data-aos='slide-up'>
      {title}
    </p>
  </div>
);

export default function () {
  return (
    <div className='bg-gray text-white'>
      <div>
        <section className='py-24 md:pt-24 md:pb-12 px-4 md:px-[165px]'>
          <h1
            className='text-[28px] md:text-5xl font-semibold text-center mb-8'
            data-aos='slide-up'>
            Empowering Business Growth <BR /> Across the Globe
          </h1>
          <MapImage />
          <p className='text-center text-sm md:text-cxl' data-aos='slide-up'>
            HupDev Technologies is a leading software design and development
            agency, committed to delivering cutting-edge solutions that drive
            business growth . With a global presence and a team of experts, we
            provide innovative and customized solutions to clients worldwide.
          </p>
        </section>
        <section className='py-24 md:pt-48 md:mb-[300px] md:pb-0 px-4 md:px-[165px]'>
          <div className='md:flex md:gap-6 md:justify-between md:items-start'>
            <h2
              className='text-[1.4rem] md:text-[40px] md:leading-[46.96px] font-semibold mb-4 md:w-7/12'
              data-aos='slide-right'>
              Ready to Drive Business <BR /> Growth with Innovative <BR />
              Software Solutions?
            </h2>
            <div className='md:w-9/12' data-aos='slide-left'>
              <p className='text-sm md:text-cxl mb-4'>
                HupDev Technologies was founded with a mission to empower
                businesses with innovative software solutions that drive growth
                and success. Since our inception, we have worked with clients
                across various industries, providing them with cutting-edge
                software design and development services.
              </p>
              <p className='text-sm md:text-cxl mb-4'>
                As an international company, we have a global presence and work
                with clients from all over the world. We take pride in our
                diverse team, which is made up of experts from different
                backgrounds and cultures. Together, we bring a wealth of
                knowledge and expertise to every project we undertake.
              </p>
              <p className='text-sm md:text-cxl'>
                At HupDev Technologies, we believe in empowering businesses with
                the technology they need to achieve their goals.
              </p>
            </div>
          </div>
        </section>
        <section className='py-24 md:pt-0 md:pb-[300px] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-7 px-4 md:px-[165px]'>
          <div data-aos='slide-right'>
            <h2 className='text-2xl font-semibold mb-4 md:text-[40px] md:leading-[46.96px]'>
              Our Mission
            </h2>
            <p className='text-sm md:text-cxl mb-10 md:mb-0'>
              To deliver world class IT services which fully satisfies the
              desired needs of our clients and provide value for their end
              users.
            </p>
          </div>
          <div data-aos='slide-right'>
            <h2 className='text-2xl font-semibold mb-4 md:text-[40px] md:leading-[46.96px]'>
              Our Vision
            </h2>
            <p className='text-sm md:text-cxl mb-10'>
              To be world’s number one solution-driven software company from
              Africa with proven products and services that yields value in
              different areas of life and works.
            </p>
          </div>
          <div
            className='row-span-2 row-start-1 col-start-2'
            data-aos='slide-left'>
            <h2 className='text-2xl font-semibold mb-4 md:text-[40px] md:leading-[46.96px]'>
              In whatever we do, we aim to create solutions
            </h2>
            <p className='text-sm md:text-cxl'>
              We are committed to delivering exceptional customer service and
              building long-term partnerships with our clients. Our agile
              development processes, innovation-driven solutions, and focus on
              digital transformation and cloud-based solutions enable us to
              provide scalable, secure, and reliable software solutions that
              help our clients stay ahead of the curve.
            </p>
          </div>
        </section>
        <section className='py-24 md:pt-36 md:pb-60 bg-gray-light px-4 md:px-dx'>
          <div className='text-center mb-7 md:mb-12'>
            <h2
              className='text-[28px] font-semibold mb-2 md:mb-4 md:text-12 md:leading-[56.35px]'
              data-aos='slide-right'>
              We are driven by values that truly matter
            </h2>
            <p className='text-sm md:text-cxl' data-aos='slide-right'>
              We call them the 3 Is and an S
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-7' data-aos='slide-up'>
            {[
              {
                h: 'Integrity',
                p: 'We operate with the highest standards of honesty and ethics',
              },
              {
                h: 'Innovation',
                p: 'We embrace creativity and forward-thinking to deliver cutting-edge solutions',
              },
              {
                h: 'Interaction',
                p: 'We collaborate closely with our clients and within our team to achieve goals.',
              },
              {
                h: 'Speed',
                p: 'We deliver projects on time with a focus on quality and attention to detail.',
              },
            ].map(({ h, p }) => (
              <div className='p-5 border-2'>
                <h3 className='font-semibold text-lg mb-1'>{h}</h3>
                <p className='text-sm'>{p}</p>
              </div>
            ))}
          </div>
        </section>
        <section className='pt-24 md:pt-37'>
          <div className='text-center'>
            <h2
              className='text-2xl font-semibold mb-2 md:mb-4 md:text-12 md:leading-[56.35px]'
              data-aos='slide-right'>
              Meet the team
            </h2>
            <p className='text-sm mb-10 md:text-cxl' data-aos='slide-up'>
              Meet our talented team of professionals. From project managers to
              developers, designers <BR /> to QA specialists, we work together
              to deliver top-notch software design and development
              <BR /> services for your business.
            </p>
          </div>
          <div className='md:flex md:flex-col md:gap-9 md:items-center'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-9'>
              {team.slice(0, 3).map((member) => (
                <TeamMember member={member} />
              ))}
            </div>
            <div className='hidden md:flex flex-row gap-9'>
              {team.slice(3, 8).map((member) => (
                <TeamMember member={member} />
              ))}
            </div>
            <div className='hidden md:flex flex-row gap-9'>
              {team.slice(8).map((member) => (
                <TeamMember member={member} />
              ))}
            </div>
          </div>
          <button className='text-orange text-sm font-medium mx-auto flex items-center gap-2 mt-8 md:hidden'>
            <span>View full team</span>
            <BsArrowRightShort size={32} />
          </button>
          <div className='md:px-56'>
            <TechIcons />
          </div>
        </section>
        <section className='-mx-4 md:mx-0 md:grid md:grid-cols-4'>
          {[
            'Rectangle 171.png',
            'Rectangle 172.png',
            'Rectangle 170.png',
            'Rectangle 173.png',
          ].map((src) => (
            <Image
              src={'/' + src}
              className='object-contain'
              width={393}
              height={223}
              data-aos='zoom-in'
            />
          ))}
        </section>
        <ThirdJumbotron />
      </div>
    </div>
  );
}
