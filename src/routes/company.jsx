import { team } from '../constants';
import { BsArrowRightShort } from 'react-icons/bs';
import { Navbar, TechIcons, ThirdJumbotron } from '../components';

export default function () {
  return (
    <div className='bg-gray text-white'>
      <Navbar />
      <div className='px-4'>
        <section className='py-12'>
          <h1 className='text-[28px] font-semibold text-center mb-8'>
            Empowering Business Growth Across the Globe
          </h1>
          <img src='/map.png' className='mx-auto mb-6' />
          <p className='text-center text-sm'>
            HupDev Technologies is a leading software design and development
            agency, committed to delivering cutting-edge solutions that drive
            business growth . With a global presence and a team of experts, we
            provide innovative and customized solutions to clients worldwide.
          </p>
        </section>
        <section className='py-24'>
          <h2 className='text-[1.4rem] font-semibold mb-4'>
            Ready to Drive Business Growth with Innovative Software Solutions?
          </h2>
          <p className='text-sm mb-4'>
            HupDev Technologies was founded with a mission to empower businesses
            with innovative software solutions that drive growth and success.
            Since our inception, we have worked with clients across various
            industries, providing them with cutting-edge software design and
            development services.
          </p>
          <p className='text-sm mb-4'>
            As an international company, we have a global presence and work with
            clients from all over the world. We take pride in our diverse team,
            which is made up of experts from different backgrounds and cultures.
            Together, we bring a wealth of knowledge and expertise to every
            project we undertake.
          </p>
          <p className='text-sm'>
            At HupDev Technologies, we believe in empowering businesses with the
            technology they need to achieve their goals.
          </p>
        </section>
        <section className='py-24'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
            <p className='text-sm mb-10'>
              To deliver world class IT services which fully satisfies the
              desired needs of our clients and provide value for their end
              users.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Our Vision</h2>
            <p className='text-sm mb-10'>
              To be world’s number one solution-driven software company from
              Africa with proven products and services that yields value in
              different areas of life and works.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>
              In whatever we do, we aim to create solutions
            </h2>
            <p className='text-sm'>
              We are committed to delivering exceptional customer service and
              building long-term partnerships with our clients. Our agile
              development processes, innovation-driven solutions, and focus on
              digital transformation and cloud-based solutions enable us to
              provide scalable, secure, and reliable software solutions that
              help our clients stay ahead of the curve.
            </p>
          </div>
        </section>
        <section className='py-24 bg-gray-light -mx-4 px-4'>
          <div className='text-center mb-7'>
            <h2 className='text-[28px] font-semibold mb-2'>
              We are driven by values that truly matter
            </h2>
            <p className='text-sm'>We call them the 3 Is and an S</p>
          </div>
          <div className='flex flex-col gap-7'>
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
        <section className='pt-24'>
          <div className='text-center'>
            <h2 className='text-2xl font-semibold mb-2'>Meet the team</h2>
            <p className='text-sm mb-10'>
              Meet our talented team of professionals. From project managers to
              developers, designers to QA specialists, we work together to
              deliver top-notch software design and development services for
              your business.
            </p>
          </div>
          <div className='flex flex-col gap-8'>
            {team.slice(0, 3).map(({ avatar, name, title }) => (
              <div className='flex flex-col items-center'>
                <img src={avatar} className='mb-4' />
                <h4 className='text-2xl font-semibold mb-1'>{name}</h4>
                <p className='text-lg'>{title}</p>
              </div>
            ))}
          </div>
          <button className='text-orange text-sm font-medium mx-auto flex items-center gap-2 mt-8'>
            <span>View full team</span>
            <BsArrowRightShort size={32} />
          </button>
          <TechIcons />
        </section>
        <section className='-mx-4'>
          {[
            'Rectangle 171.png',
            'Rectangle 172.png',
            'Rectangle 173.png',
            'Rectangle 170.png',
          ].map((src) => (
            <img src={'/' + src} className='w-full' />
          ))}
        </section>
        <ThirdJumbotron />
      </div>
    </div>
  );
}
