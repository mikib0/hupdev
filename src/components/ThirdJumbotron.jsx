import { BR } from ".";
import Button from "./Button";

export default function ThirdJumbotron({ cn }) {
  return (
    <section className={'bg-gray text-center px-4 py-24' + (cn ? ' ' + cn : '')}>
      <h2 className='font-semibold text-3xl md:text-5xl mb-2 md:mb-4'>Let's Work Together</h2>
      <p className='text-sm mb-5 md:mb-6 px-8 md:text-xl'>
        We create solutions that will drive your business forward. <BR /> Contact us
        today to learn more about how we can help you achieve your goals.
      </p>
      <Button>Start a Project</Button>
    </section>
  );
}
