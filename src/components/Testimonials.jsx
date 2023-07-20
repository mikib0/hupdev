import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { testimonials } from '../constants';
import { useEffect, useState } from 'react';
const Testimonial = ({ author, role, text, mrZero }) => (
  <div className={ mrZero ? 'md:mr-0' : 'md:mr-[70px]' }>
    <hr className='text-orange mb-2 md:mb-6' />
    <div className='text-start'>
      <p className='text-sm mb-4'>{text}</p>
      <h3 className='font-medium text-base mb-2'>{author}</h3>
      <p className='text-sm font-normal'>{role}</p>
    </div>
  </div>
);

const Indicator = ({ isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`w-2 h-2 ${
      isSelected ? 'bg-orange' : 'opacity-50 bg-white'
    }`}></div>
);

export default function Testimonials() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const mdQuery = window.matchMedia('(min-width: 768px)');
  const [isDesktop, setIsDesktop] = useState(mdQuery.matches);

  useEffect(() => {
    const handleChange = (query) => setIsDesktop(query.matches);
    mdQuery.addListener(handleChange);
    return () => mdQuery.removeListener(handleChange);
  }, []);

  return (
    <section className='py-24 bg-gray-light px-4 md:px-dx'>
      <h2 className='text-[28px] font-medium mb-2 font-dm-sans'>
        What our clients are saying
      </h2>{' '}
      {/* TODO 28px! */}
      <p className='text-sm mb-8'>Here are what our clients say about us</p>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        centerMode={isDesktop}
        centerSlidePercentage={33.33}
        selectedItem={selectedItemIndex}
        showThumbs={false}
        onChange={(i) => setSelectedItemIndex(i)}
        renderIndicator={() => null}>
        {testimonials.map(({ author, role, text }, i) => (
          <Testimonial
            mrZero={i == selectedItemIndex + 1}
            author={author}
            role={role}
            text={text}
          />
        ))}
      </Carousel>
      <div className='flex justify-center gap-2 mt-9 md:mt-16'>
        {testimonials.map((el, i) => (
          <Indicator
            onClick={() => setSelectedItemIndex(i)}
            isSelected={selectedItemIndex == i}
          />
        ))}
      </div>
      {/* TODO the dots */}
    </section>
  );
}
