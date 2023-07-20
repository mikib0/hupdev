import pic2 from '../assets/gallery_pic2.png';
import uberzoomedout from '../assets/uber_zoomedout.png';
import pic3 from '../assets/gallery_pic3.png';
import pic4 from '../assets/gallery_pic4.png';
import livedata from '../assets/livedata.png';

import {
  BR,
  Navbar,
  Paragraph,
  ProjectsFilter,
  ThirdJumbotron,
} from '../components';

export default function () {
  return (
    <div className='bg-gray'>
      <Navbar />
      <ProjectsFilter />
      <section className='py-24 md:py-44 px-4 md:px-dx'>
        <Paragraph title='Experience our solutions'>
          Our portfolio showcases the custom software development, web
          application <BR /> development, and mobile application development
          projects, as well as strategies,
          <BR /> campaigns, and maintenance we have worked with clients on.
        </Paragraph>
      </section>
      <section className='flex flex-col gap-2 px-4 md:px-dx md:hidden'>
        {[livedata, uberzoomedout, pic2, pic3, pic4].map((pic, i) => (
          <img src={pic} alt={'pic' + i} key={'pic' + i} />
        ))}
      </section>
      <section className='hidden md:grid md:grid-cols-[371px_371px_371px] md:grid-rows-[420px_420px_420px_420px] gap-4 w-auto mx-auto justify-center'>
        {[
          { img: uberzoomedout, span2: false },
          { img: pic3, span2: false },
          { img: livedata, span2: false },
          { img: pic2, span2: true },
          { img: pic3, span2: false },
          { img: pic4, span2: false },
          { img: uberzoomedout, span2: false },
          { img: pic3, span2: false },
          { img: livedata, span2: false },
          { img: pic2, span2: true },
        ].map(({ img, span2 }, i) => (
          <div className={span2 ? 'col-span-2' : ''}>
            <img
              src={img}
              alt={'pic' + i}
              key={'pic' + i}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
      </section>
      <ThirdJumbotron cn='text-white' />
    </div>
  );
}
