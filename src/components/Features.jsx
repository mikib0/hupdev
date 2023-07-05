import developementIcon from '../assets/fluent_developer-board-20-regular.png';
import maintenaceIcon from '../assets/carbon_cloud-service-management.png';
import trainingIcon from '../assets/mdi_learn-outline.png';
import marketingIcon from '../assets/nimbus_marketing.png'

const Feature = ({feat: {iconSrc, title, desc}})=>(<div className='border-2 border-white p-5 hover:text-orange hover:border-orange'> {/*TODO hover: image orange!!! */}
  <img src={iconSrc} alt={title + ' icon'} className='mb-2' />
  <h3 className='capitalize font-semibold text-lg'>{title}</h3>
  <p className='text-sm'>{desc}</p>
</div>)

export default function Features() {
  return (
    <div className='py-16 flex flex-col gap-8'>
      {[
        {
          iconSrc: developementIcon,
          title: 'Development',
          desc: 'Building and creating new products, software, or solutions',
        },
        {
          iconSrc: maintenaceIcon,
          title: 'Maintenace',
          desc: 'Ensuring the smooth functioning of existing products or solutions',
        },
        {
          iconSrc: trainingIcon,
          title: 'Training',
          desc: 'Providing education to individuals to build or improve their skills',
        },
        {
          iconSrc: marketingIcon,
          title: 'Marketing',
          desc: 'Promoting and advertising solutions to potential customers',
        },
      ].map(item=><Feature feat={item} key={item.title} />)}
    </div>
  );
}
