import pic2 from '../assets/gallery_pic2.png';
import uberzoomedout from '../assets/uber_zoomedout.png';
import pic3 from '../assets/gallery_pic3.png';
import pic4 from '../assets/gallery_pic4.png';
import livedata from '../assets/livedata.png';

import { Navbar, Paragraph, ProjectsFilter, ThirdJumbotron } from '../components';
// TODO work on the gallery pics

export default function () {
  return (
    <div className='bg-gray'>
    <Navbar />
      <ProjectsFilter />
      <section className='py-24 px-4'>
        <Paragraph
          title='Experience our solutions'
          text='Our portfolio showcases the custom software development, web application development, and mobile application development projects, as well as strategies, campaigns, and maintenance we have worked with clients on.'
        />
      </section>
      <section className='flex flex-col gap-2 px-4'>
        {[livedata, uberzoomedout, pic2, pic3, pic4].map((pic, i) => (
          <img src={pic} alt={'pic' + i} key={'pic' + i} />
        ))}
      </section>
      <ThirdJumbotron cn='text-white' />
    </div>
  );
}
