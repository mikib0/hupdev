import {
  BR,
  Navbar,
  Paragraph,
  ProjectsFilter,
  ThirdJumbotron,
} from '../components';
import Image from 'next/image';

export default function () {
  return (
    <div className='bg-gray'>
      <Navbar bg='bg-gray' />
      <ProjectsFilter />
      <section className='py-24 md:py-44 px-4 md:px-dx' data-aos='slide-right'>
        <Paragraph title='Experience our solutions'>
          Our portfolio showcases the custom software development, web
          application <BR /> development, and mobile application development
          projects, as well as strategies,
          <BR /> campaigns, and maintenance we have worked with clients on.
        </Paragraph>
      </section>
      <section className='flex flex-col gap-2 px-4 md:px-dx md:hidden'>
        {[
          { src: 'livedata.png', width: 361, height: 379 },
          { src: 'uber_zoomedout.png', width: 361, height: 380 },
          { src: 'gallery_pic2.png', width: 393, height: 216 },
          { src: 'gallery_pic3.png', width: 393, height: 216 },
          { src: 'gallery_pic4.png', width: 393, height: 216 },
        ].map(({ src, width, height }, i) => (
          <Image
            src={'/' + src}
            alt={'pic' + i}
            key={'pic' + i}
            width={width}
            height={height}
            data-aos='zoom-in'
          />
        ))}
      </section>
      <section className='hidden md:grid md:grid-cols-[371px_371px_371px] md:grid-rows-[420px_420px_420px_420px] gap-4 w-auto mx-auto justify-center'>
        {[
          { src: 'uber_zoomedout.png', span2: false, width: 361, height: 380 },
          { src: 'gallery_pic3.png', span2: false, width: 393, height: 216 },
          { src: 'livedata.png', span2: false, width: 361, height: 379 },
          { src: 'gallery_pic2.png', span2: true, width: 393, height: 216 },
          { src: 'gallery_pic3.png', span2: false, width: 393, height: 216 },
          { src: 'gallery_pic4.png', span2: false, width: 393, height: 216 },
          { src: 'uber_zoomedout.png', span2: false, width: 361, height: 379 },
          { src: 'gallery_pic3.png', span2: false, width: 393, height: 216 },
          { src: 'livedata.png', span2: false, width: 361, height: 379 },
          { src: 'gallery_pic2.png', span2: true, width: 393, height: 216 },
        ].map(({ src, span2, width, height }, i) => (
          <div className={span2 ? 'col-span-2' : ''}>
            <Image
              src={'/' + src}
              alt={'pic' + i}
              key={'pic' + i}
              width={width}
              height={height}
              className='h-full w-full object-cover'
              data-aos='zoom-in'
            />
          </div>
        ))}
      </section>
      <ThirdJumbotron cn='text-white' />
    </div>
  );
}
