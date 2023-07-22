import Image from 'next/image';

const Service = ({ title, subtitle, text, imgSrc, reverse }) => (
  <div
    className={
      'py-24 md:flex md:items-center md:justify-between' +
      (reverse ? ' md:flex-row-reverse' : '')
    }>
    <Image
      src={'/' + imgSrc}
      className='mx-auto mb-10 md:object-contain'
      width={575}
      height={300}
      data-aos={`slide-${reverse ? 'left' : 'right'}`}
    />
    <div data-aos={`slide-${reverse ? 'right' : 'left'}`}>
      <h2 className='font-semibold text-lg md:text-3xl mb-4 capitalize'>
        {title}
      </h2>
      <h4 className='font-semibold text-sm md:text-cxl mb-4'>{subtitle}</h4>
      {text.map((content, i) => {
        return (
          <p className={'text-sm md:text-cxl' + (i == 0 ? ' mb-4' : '')}>
            {content}
          </p>
        );
      })}
    </div>
  </div>
);

const Services = () => {
  return (
    <div className='py-24'>
      {[
        {
          title: 'development',
          subtitle: 'SaaS, B2B, Fintech, E-commerce',
          text: [
            "Our development services at HupDev Technologies include custom software development, web application development, mobile application development, e-commerce development, and UI/UX design. All designed to meet the unique needs of our clients. We understand that every business is different and that each solution requires a customized approach. That's why we specialize in creating custom software solutions that are tailored to our clients' specific needs.",
            'Our expertise in enterprise software development ensures that we can create solutions that streamline business processes and improve efficiency.',
          ],
          imgSrc: 'cards.png',
        },
        {
          title: 'Maintenance',
          subtitle: 'Regular updates, Bug fixing, Technical Support',
          text: [
            "At HupDev Technologies, we understand the importance of maintaining our clients' solutions to ensure they run smoothly and efficiently. Our maintenance services include regular updates, bug fixes, and technical support to ensure that our clients' solutions continue to meet their needs and perform optimally. We also offer security updates to protect against potential threats and ensure the safety of our clients' data.",
            "Our team of experienced professionals is always available to provide quick and efficient support to ensure that our clients' solutions are running at peak performance.",
          ],
          imgSrc: 'gears_.png',
        },
        {
          title: 'training',
          subtitle: 'Full-stack Development, UI/UX Design, Digital Marketing',
          text: [
            'At HupDev Technologies, we offer a range of training programs designed to help individuals improve their skills and stay ahead of the curve in a fast-paced industry. Our experienced trainers are committed to providing high-quality education on a wide range of topics, from software development to UI/UX design, for individuals at all skill levels. We offer both online and in-person training programs, making it easy for individuals worldwide to access our services.',
            'Our commitment to providing innovative and sustainable solutions extends to providing education and training, which helps contribute to the growth and development of the industry as a whole.',
          ],
          imgSrc: 'bulb_.png',
        },
        {
          title: 'marketing',
          subtitle: 'SEO, PPC, Social media marketing, Email marketing',
          text: [
            "In today's digital age, effective marketing is critical to the success of any business. Our marketing services are designed to help businesses reach their target audience effectively and drive engagement. We offer a range of marketing services, including SEO, PPC, social media marketing, content marketing, and more. Our team of marketing experts works closely with our clients to develop strategies that are tailored to their specific needs and goals. We use the latest tools and techniques to ensure that our clients' marketing campaigns are effective and produce measurable results.",
          ],
          imgSrc: 'digitalmarketing_.png',
        },
      ].map((item, i) => (
        <Service {...item} reverse={i % 2 == 0} />
      ))}
    </div>
  );
};

export default Services;
