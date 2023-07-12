import developementIcon from '../assets/fluent_developer-board-20-regular.png';
import maintenaceIcon from '../assets/carbon_cloud-service-management.png';
import trainingIcon from '../assets/mdi_learn-outline.png';
import marketingIcon from '../assets/nimbus_marketing.png'
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
    <div className='py-16 flex flex-col gap-8'>
      {features.map((item) => (
        <Feature feat={item} key={item.title} />
      ))}
    </div>
  );
}
