const Testimonial = ({author, role, text})=>(<div>
  <p className='text-sm mb-4'>{text}</p>
  <h3 className='font-medium text-base mb-2'>{author}</h3>
  <p className='text-sm font-normal'>{role}</p>
</div>)

export default function Testimonials() {
  return (
    <section className='py-24 bg-gray-light px-4'>
      <h2 className='text-2xl font-medium mb-2'>What our clients are saying</h2>{' '}
      {/* TODO 28px! */}
      <p className='text-sm mb-8'>Here are what our clients say about us</p>
      <hr className='text-orange mb-2'/>
      <Testimonial
        author='Patrick Odey'
        role='CEO, HupDev Technologies'
        text='It is always a pleasure to work with HupDev. Direct, professional and attentive. They put your work first.'
      />
      {/* TODO the dots */}
    </section>
  );
}
