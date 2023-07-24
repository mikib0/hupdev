import { ContactInfo } from '../components';

const TextInput = ({ placeholder, ...rest }) => (
  <input
    type='text'
    placeholder={placeholder}
    className='py-4 px-2 border-b-[1px] border-white text-sm font-normal text-white bg-transparent w-full focus:outline-none'
    {...rest}
  />
);
const Select = ({ label, options }) => (
  <select
    value='default'
    onChange={console.log}
    className='py-4 px-1 border-b-[1px] border-white text-sm font-normal text-[#606060] bg-transparent w-full'>
    <option value='default'>{label}</option>
    {options.map((opt) => (
      <option value={opt}>{opt}</option>
    ))}
  </select>
);

export default function () {
  return (
    <div className='bg-gray text-white'>
      <section className='py-24 md:pt-24 md:pb-48 px-4 md:px-[208px] md:flex md:gap-24 md:justify-between'>
        <div className='md:pt-6'>
          <h1
            className='font-semibold text-3xl mb-4 md:mb-8'
            data-aos='slide-right'>
            Let's work together!
          </h1>
          <ContactInfo data-aos='slide-right' />
        </div>
        <form className='mt-10 md:mt-0 md:w-[438px]' data-aos='slide-left'>
          <TextInput placeholder='Name' required />
          <TextInput placeholder='Email' type='email' required />
          <TextInput placeholder='Phone' />
          <Select
            label='Select project type'
            options={['type1', 'type2', 'type3']}
          />
          <TextInput placeholder='Describe your project in one line' required />
          <Select label='Budget' options={['budget1', 'budget2', 'budget3']} />
          <button className='py-2 px-4 bg-orange text-[#222] font-medium text-base mt-8'>
            Let's Collab!
          </button>
        </form>
      </section>
    </div>
  );
}
