import pic1 from '../assets/gallery_pic1.png'
import pic2 from '../assets/gallery_pic2.png'
import pic3 from '../assets/gallery_pic3.png'
import pic4 from '../assets/gallery_pic4.png'

import {BsArrowRightShort} from 'react-icons/bs'

export default function Gallery() {
  return (
    <section className='relative'>
      {[pic1, pic2, pic3, pic4].map((pic, i) => (
        <img src={pic} alt={'pic' + i} key={'pic' + i} className='w-full' />
      ))}
      <button className='bg-orange absolute right-1/2 translate-x-1/2 -bottom-4 text-black font-medium text-sm px-4 py-2 flex items-center justify-between'><span>See Projects</span> <BsArrowRightShort size={16} /></button>
    </section>
  );
}
