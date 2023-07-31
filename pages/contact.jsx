import { ContactInfo, Toast } from '@components';
import { API, budgets, projectTypes } from '@constants';
import { useShowToast } from '@hooks';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Input = ({ placeholder, type, name, ...rest }) => (
  <>
    <Field
      type={type && 'text'}
      name={name}
      placeholder={placeholder}
      className='py-4 px-2 border-b-[1px] border-white text-sm font-normal text-white bg-transparent w-full focus:outline-none'
      {...rest}
    />
    {/* <ErrorMessage name={name} component='div' /> */}
  </>
);

export default function () {
  const [showToast, showToastHandler] = useShowToast();
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
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            projectType: '',
            projectSummary: '',
            projectBudget: '',
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await axios.post(API + '/' + 'contactus', values);
              showToastHandler();
            } finally {
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting }) => (
            <Form className='mt-10 md:mt-0 md:w-[438px]' data-aos='slide-left'>
              <Input placeholder='Name' name='name' required />
              <Input placeholder='Email' name='email' type='email' required />
              <Input placeholder='Phone' name='phone' />
              <Field
                as='select'
                name='projectType'
                required
                className='py-4 px-1 border-b-[1px] border-white text-sm font-normal text-[#606060] bg-transparent w-full'>
                <option value='default'>Select project type</option>
                {projectTypes.map((opt) => (
                  <option value={opt}>{opt}</option>
                ))}
              </Field>
              <Input
                placeholder='Describe your project in one line'
                name='projectSummary'
                required
              />
              <Field
                as='select'
                name='projectBudget'
                required
                className='py-4 px-1 border-b-[1px] border-white text-sm font-normal text-[#606060] bg-transparent w-full'>
                <option value='default'>Budget</option>
                {budgets.map((opt) => (
                  <option value={opt}>{opt}</option>
                ))}
              </Field>
              <button
                className='py-2 px-4 bg-orange text-[#222] font-medium text-base mt-8'
                disabled={isSubmitting}>
                Let's Collab!
              </button>
            </Form>
          )}
        </Formik>
        {showToast && <Toast text='Your message has been received!' />}
      </section>
    </div>
  );
}
