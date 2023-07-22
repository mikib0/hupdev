import { features } from '../constants';

const Feature = ({ feat: { icon, title, desc } }) => (
  <div className='group border-2 border-white p-5 hover:text-orange hover:border-orange'>
    {icon}
    <h3 className='capitalize font-semibold text-lg'>{title}</h3>
    <p className='text-sm'>{desc}</p>
  </div>
);

export default function Features() {
  return (
    <div
      className='py-16 flex flex-col gap-8 md:flex-row'
      data-aos='slide-up'
      data-aos-delay='300'>
      {features.map((item) => (
        <Feature feat={item} key={item.title} />
      ))}
    </div>
  );
}
